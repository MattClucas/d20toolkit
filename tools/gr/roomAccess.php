<?php
    require_once("interfaceConstants.php");

    // constants for prepared mysql statements
    // prepared statements should not have ending semicolon
    const PREP_STATEMENT_CREATE_ROOM         = "INSERT INTO `ROOMS` (`ROOM_NAME`, `ROOM_PASSWORD`, `ROOM_MEMBERS`, `ROOM_IS_OPEN`, `NUM_MEMBERS`) VALUES (?, ?, ?, ?, 1)";
    const PREP_STATEMENT_SELECT_ROOM_BY_NAME = "SELECT `ROOM_PASSWORD`, `ROOM_MEMBERS`, `NUM_MEMBERS` FROM `ROOMS` WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_UPDATE_MEMBERS      = "UPDATE `ROOMS` SET `ROOM_MEMBERS`=?,`NUM_MEMBERS`=?,`LAST_CHECKIN`=CURRENT_TIMESTAMP WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_GET_MEMBERS         = "SELECT `ROOM_MEMBERS`, `NUM_MEMBERS` FROM `ROOMS` WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_PING_ROOM           = "UPDATE `ROOMS` SET `LAST_CHECKIN`=CURRENT_TIMESTAMP WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_SELECT_OPEN_ROOMS   = "SELECT `ROOM_NAME`, `ROOM_MEMBERS`, `NUM_MEMBERS` FROM `ROOMS` WHERE `ROOM_IS_OPEN`=1 AND `NUM_MEMBERS`<6";
    const PREP_STATEMENT_DELETE_EMPTY        = "DELETE FROM `ROOMS` WHERE `ROOMS`.`ROOM_NAME`=?";
    const PREP_STATEMENT_TOTAL_USERS         = "SELECT COALESCE(SUM(NUM_MEMBERS),0) FROM `ROOMS`";

    $db = new mysqli("localhost", "root", "", "d20toolkit");
    if($db->connect_error)
    {
        sendResponse(false, ERROR_DATABASE_ISSUE);
    }

    /**
     * Returns the total number of users that are in rooms.
     */
    function getTotalUsers()
    {
        global $db;
        if (!($stmt = $db->prepare(PREP_STATEMENT_TOTAL_USERS)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE);
        }
        $stmt->execute();
        $stmt->bind_result($total);
        $stmt->fetch();
        return $total;
    }

    /**
     * Creates and sends a json response back to the requester.
     * $success - a boolean flag showing whether everything went ideally for this request.
     * $errorCode - one of the error code constants, this tells the client what went wrong
     * $roomMembers - a list of members that belong to the room that this person joined
     */
    function sendResponse($success, $errorCode, $roomMembers = null, $roomName = null, $numUsers = null)
    {
        // close connection
        global $db;
        $db->close();

        // create the response, it will be encoded as json
        $response = array();
        $response[RESPONSE_SUCCESS] = $success;
        $response[RESPONSE_ERROR_CODE] = $errorCode;
        if ($roomMembers !== null)
        {
            $response[RESPONSE_ROOM_MEMBERS] = $roomMembers;
        }
        if ($roomName !== null)
        {
            $response[RESPONSE_ROOM_NAME] = $roomName;
        }
        if ($numUsers !== null)
        {
            $response[RESPONSE_NUM_USERS] = $numUsers;
        }
        die(json_encode($response));
    }

    /**
     * Checks to see if the $_POST[REQUEST_ROOM_NAME] was set properly
     * Returns the room name or sends a bad request data response.
     */
    function validateRoomName()
    {
        $roomName = $_POST[REQUEST_ROOM_NAME];
        if (!isset($roomName) || empty($roomName) || strlen($roomName) > 50)
        {
            sendResponse(false, ERROR_BAD_REQUEST_DATA);
        }
        return $roomName;
    }

    /**
     * Checks to see if the $_POST[REQUEST_USER] was set properly
     * Returns the user name or sends a bad request data response.
     */
    function validateUserName()
    {
        $username = $_POST[REQUEST_USER];
        if(!isset($username) || empty($username))
        {
            sendResponse(false, ERROR_BAD_REQUEST_DATA);
        }
        return $username;
    }

    /**
     * Creates a room in the database and sends a response to the user.
     */
    function createRoom()
    {
        global $db;

        $username = validateUserName();
        $roomName = validateRoomName();

        // create prepared statement with the db
        if (!($stmt = $db->prepare(PREP_STATEMENT_CREATE_ROOM)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
        }

        // bind three strings to these variables, which are in the POST parameters
        $stmt->bind_param('sssi', $roomName, $hashedPassword, $members, $isOpen);

        $isOpen = intval(strtolower($_POST[REQUEST_OPEN]) === "true");


        // hash the password
        $hashedPassword = password_hash($_POST[REQUEST_ROOM_PASSWORD], PASSWORD_DEFAULT);

        // members is a stringified json array of users belonging to the room
        // in this case its just this user
        $members = json_encode(array($username));

        // execute query
        $stmt->execute();

        // check if room already existed
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_ROOM_ALREADY_EXISTS, null, $roomName);
        }

        // send successful response
        sendResponse(true, ERROR_NONE, null, $roomName);
    }

    /**
     * Adds the user to a room. Responds with a list of other members.
     */
    function joinRoom()
    {
        global $db;
        $username = validateUserName();
        $randomRoom = (strtolower($_POST[REQUEST_RANDOM]) === "true");
        if ($randomRoom)
        {
            // query db for room password and members
            if (!($stmt = $db->prepare(PREP_STATEMENT_SELECT_OPEN_ROOMS)))
            {
                sendResponse(false, ERROR_DATABASE_ISSUE, null, null);
            }
            $stmt->execute();

            // get the data from the query and store it into an array
            $stmt->bind_result($roomName, $membersStr, $numMembers);
            $rooms = array();
            while($stmt->fetch())
            {
                $rooms[] = array($roomName, $membersStr, $numMembers);
            }
            $stmt->close();

            // choose a random room from the array of rooms
            $numRooms = count($rooms);
            if ($numRooms == 0)
            {
                sendResponse(false, ERROR_ROOM_DOES_NOT_EXIST, null, null);
            }
            $randomRoom = mt_rand(0, $numRooms - 1);
            $room = $rooms[$randomRoom];
            $roomName = $room[0];
            $membersStr = $room[1];
            $numMembers = $room[2];
        }
        else
        {
            // validate the room name
            $roomName = validateRoomName();

            // query db for room password and members
            if (!($stmt = $db->prepare(PREP_STATEMENT_SELECT_ROOM_BY_NAME)))
            {
                sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
            }
            $stmt->bind_param("s", $roomName);
            $stmt->execute();

            // password is stored as a hash and members as a stringified array
            $stmt->bind_result($hashedPassword, $membersStr, $numMembers);
            $stmt->fetch();
            $stmt->close();

            // check to see if the room exists
            if (empty($hashedPassword))
            {
                sendResponse(false, ERROR_ROOM_DOES_NOT_EXIST, null, $roomName);
            }

            // verify the password is correct to join the room
            $password = isset($_POST[REQUEST_ROOM_PASSWORD]) ? $_POST[REQUEST_ROOM_PASSWORD] : "";
            if(!password_verify($password, $hashedPassword))
            {
                sendResponse(false, ERROR_PASSWORD_INCORRECT, null, $roomName);
            }
        }

        // transform the json string into an array of members
        $membersArr = json_decode($membersStr);

        // check if user is already in the room
        if (in_array($username, $membersArr)) {
            // user already exists in room, we're done
            sendResponse(true, ERROR_NONE, $membersStr, $roomName);
        }

        // add user to members list
        $membersArr[] = $username;
        $membersArrVals = array_values($membersArr);
        $numMembers = count($membersArrVals);
        $membersStr = json_encode($membersArrVals);

        // update list in the database
        if (!($stmt = $db->prepare(PREP_STATEMENT_UPDATE_MEMBERS)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
        }
        $stmt->bind_param('sis', $membersStr, $numMembers, $roomName);
        $stmt->execute();
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
        }

        // everything went correctly, send response
        sendResponse(true, ERROR_NONE, $membersStr, $roomName);
    }


    /**
     * Removes the user from the room.
     */
    function leaveRoom()
    {
        global $db;

        // validate the room name
        $roomName = validateRoomName();
        $username = validateUserName();

        // query db for room members
        if (!($stmt = $db->prepare(PREP_STATEMENT_GET_MEMBERS)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
        }
        $stmt->bind_param("s", $roomName);
        $stmt->execute();

        // password is stored as a hash and members as a stringified array
        $stmt->bind_result($membersStr, $numMembers);
        $stmt->fetch();
        $stmt->close();

        // transform the json string into an array of members
        $membersArr = json_decode($membersStr);

        // get index of member in room
        // MUST USE === or !== HERE
        if (($index = array_search($username, $membersArr)) === false) {
            // user isn't in the room, we're done
            sendResponse(true, ERROR_NONE, null, $roomName);
        }

        // delete member from room
        unset($membersArr[$index]);
        $membersArrVals = array_values($membersArr);
        $numMembers = count($membersArrVals);
        if ($numMembers == 0)
        {
            // update list in the database
            if (!($stmt = $db->prepare(PREP_STATEMENT_DELETE_EMPTY)))
            {
                sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
            }
            $stmt->bind_param('s', $roomName);
            $stmt->execute();
            if ($stmt->affected_rows != 1)
            {
                sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
            }
        }
        else
        {
            $membersStr = json_encode($membersArrVals);

            // update list in the database
            if (!($stmt = $db->prepare(PREP_STATEMENT_UPDATE_MEMBERS)))
            {
                sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
            }
            $stmt->bind_param('sis', $membersStr, $numMembers, $roomName);
            $stmt->execute();
            if ($stmt->affected_rows != 1)
            {
                sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
            }
        }

        // everything went correctly, send response
        sendResponse(true, ERROR_NONE, null, $roomName);
    }

    /**
     * Updates the latest check in time for the given room.
     */
    function pingRoom()
    {
        global $db;

        // validate the room name
        $roomName = validateRoomName();

        // ping latest checkin for the room
        if (!($stmt = $db->prepare(PREP_STATEMENT_PING_ROOM)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null, $roomName);
        }
        $stmt->bind_param('s', $roomName);
        $stmt->execute();

        // make sure the room exists and was updated
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_ROOM_DOES_NOT_EXIST, null, $roomName);
        }

        // everything went correctly, send response
        sendResponse(true, ERROR_NONE, null, $roomName);
    }

    /* RUNNING CODE BEGINS HERE */

    // check if required request parameters are set
    if (!isset($_POST[REQUEST_TYPE]) || empty($_POST[REQUEST_TYPE]))
    {
        sendResponse(false, ERROR_BAD_REQUEST_DATA, null);
    }

    // do the corresponding action based on the request type
    switch ($_POST[REQUEST_TYPE])
    {
        case TYPE_CREATE_ROOM:
            createRoom();
            break;
        case TYPE_JOIN_ROOM:
            joinRoom();
            break;
        case TYPE_LEAVE_ROOM:
            leaveRoom();
            break;
        case TYPE_PING_ROOM:
            pingRoom();
            break;
        case TYPE_GET_NUM_USERS:
            sendResponse(true, ERROR_NONE, null, null, getTotalUsers());
            break;
        default:
            sendResponse(false, ERROR_BAD_REQUEST_DATA, null);
            break;
    }
?>
