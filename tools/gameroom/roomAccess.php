<?php
    require_once("interfaceConstants.php");

    // constants for prepared mysql statements
    // prepared statements should not have ending semicolon
    const PREP_STATEMENT_CREATE_ROOM    =   "INSERT INTO `d20toolkit`.`ROOMS` (`ROOM_NAME`, `ROOM_PASSWORD`, `ROOM_MEMBERS`) VALUES (?, ?, ?)";
    const PREP_STATEMENT_SELECT_ROOM    =   "SELECT `ROOM_PASSWORD`, `ROOM_MEMBERS` FROM `d20toolkit`.`ROOMS` WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_UPDATE_MEMBERS =   "UPDATE `ROOMS` SET `ROOM_MEMBERS`=?,`LAST_CHECKIN`=CURRENT_TIMESTAMP WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_GET_MEMBERS    =   "SELECT `ROOM_MEMBERS` FROM `d20toolkit`.`ROOMS` WHERE `ROOM_NAME`=?";
    const PREP_STATEMENT_PING_ROOM      =   "UPDATE `ROOMS` SET `LAST_CHECKIN`=CURRENT_TIMESTAMP WHERE `ROOM_NAME`=?";

	$db = new mysqli("localhost", "root", "rootpw", "d20toolkit");
    if($db->connect_error)
    {
        sendResponse(false, ERROR_DATABASE_ISSUE, null);
    }

    /**
     * Creates and sends a json response back to the requester.
     * $success - a boolean flag showing whether everything went ideally for this request.
     * $errorCode - one of the error code constants, this tells the client what went wrong
     * $roomMembers - a list of members that belong to the room that this person joined
     */
    function sendResponse($success, $errorCode, $roomMembers)
    {
        // close connection
        global $db;
        $db->close();

        // create the response, it will be encoded as json
        $response = array();
        $response[RESPONSE_SUCCESS] = $success;
        $response[RESPONSE_ERROR_CODE] = $errorCode;
        $response[RESPONSE_ROOM_MEMBERS] = $roomMembers;
        die(json_encode($response));
    }

    /**
     * Creates a room in the database and sends a response to the user.
     */
    function createRoom()
    {
        global $db;
        // create prepared statement with the db
        if (!($stmt = $db->prepare(PREP_STATEMENT_CREATE_ROOM)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }

        // bind three strings to these variables, which are in the POST parameters
        $stmt->bind_param('sss', $roomName, $hashedPassword, $members);

        $roomName = $_POST[REQUEST_ROOM_NAME];

        // hash the password
        $hashedPassword = password_hash($_POST[REQUEST_ROOM_PASSWORD], PASSWORD_DEFAULT);

        // members is a stringified json array of users belonging to the room
        // in this case its just this user
        $members = json_encode(array($_POST[REQUEST_USER]));

        // execute query
        $stmt->execute();

        // check if room already existed
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_ROOM_ALREADY_EXISTS, null);
        }

        // send successful response
        sendResponse(true, ERROR_NONE, null);
    }

    /**
     * Adds the user to a room. Responds with a list of other members.
     */
    function joinRoom()
    {
        global $db;

        // query db for room password and members
        if (!($stmt = $db->prepare(PREP_STATEMENT_SELECT_ROOM)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }
        $stmt->bind_param("s", $_POST[REQUEST_ROOM_NAME]);
        $stmt->execute();

        // password is stored as a hash and members as a stringified array
        $stmt->bind_result($hashedPassword, $membersStr);
        $stmt->fetch();
        $stmt->close();

        // check to see if the room exists
        if (empty($hashedPassword))
        {
            sendResponse(false, ERROR_ROOM_DOES_NOT_EXIST, null);
        }

        // verify the password is correct to join the room
        if(!password_verify($_POST[REQUEST_ROOM_PASSWORD], $hashedPassword))
        {
            sendResponse(false, ERROR_PASSWORD_INCORRECT, null);
        }

        // transform the json string into an array of members
        $membersArr = json_decode($membersStr);
        $user = $_POST[REQUEST_USER];

        // check if user is already in the room
        if (in_array($user, $membersArr)) {
            // user already exists in room, we're done
            sendResponse(true, ERROR_NONE, $membersStr);
        }

        // add user to members list
        $membersArr[] = $user;
        $membersStr = json_encode(array_values($membersArr));

        // update list in the database
        if (!($stmt = $db->prepare(PREP_STATEMENT_UPDATE_MEMBERS)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }
        $stmt->bind_param('ss', $membersStr, $_POST[REQUEST_ROOM_NAME]);
        $stmt->execute();
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }

        // everything went correctly, send response
        sendResponse(true, ERROR_NONE, $membersStr);
    }

    /**
     * Removes the user from the room.
     */
    function leaveRoom()
    {
        global $db;

        // query db for room members
        if (!($stmt = $db->prepare(PREP_STATEMENT_GET_MEMBERS)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }
        $stmt->bind_param("s", $_POST[REQUEST_ROOM_NAME]);
        $stmt->execute();

        // password is stored as a hash and members as a stringified array
        $stmt->bind_result($membersStr);
        $stmt->fetch();
        $stmt->close();

        // transform the json string into an array of members
        $membersArr = json_decode($membersStr);
        $user = $_POST[REQUEST_USER];

        // get index of member in room
        // MUST USE === or !== HERE
        if (($index = array_search($user, $membersArr)) === false) {
            // user isn't in the room, we're done
            sendResponse(true, ERROR_NONE, null);
        }

        // delete member from room
        unset($membersArr[$index]);
        $membersStr = json_encode(array_values($membersArr));

        // update list in the database
        if (!($stmt = $db->prepare(PREP_STATEMENT_UPDATE_MEMBERS)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }
        $stmt->bind_param('ss', $membersStr, $_POST[REQUEST_ROOM_NAME]);
        $stmt->execute();
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }

        // everything went correctly, send response
        sendResponse(true, ERROR_NONE, null);
    }

    /**
     * Updates the latest check in time for the given room.
     */
    function pingRoom()
    {
        global $db;

        // ping latest checkin for the room
        if (!($stmt = $db->prepare(PREP_STATEMENT_PING_ROOM)))
        {
            sendResponse(false, ERROR_DATABASE_ISSUE, null);
        }
        $stmt->bind_param('s', $_POST[REQUEST_ROOM_NAME]);
        $stmt->execute();

        // make sure the room exists and was updated
        if ($stmt->affected_rows != 1)
        {
            sendResponse(false, ERROR_ROOM_DOES_NOT_EXIST, null);
        }

        // everything went correctly, send response
        sendResponse(true, ERROR_NONE, null);
    }

    /* RUNNING CODE BEGINS HERE */

    // check if required request parameters are set
    if (!isset($_POST[REQUEST_TYPE]) || !isset($_POST[REQUEST_ROOM_NAME]) || !isset($_POST[REQUEST_USER]))
    {
        sendResponse(false, ERROR_BAD_REQUEST_DATA, null);
    }

    // do the corresponding action based on the request type
    switch ($_POST[REQUEST_TYPE])
    {
        case TYPE_CREATE_ROOM:
            createRoom();
        case TYPE_JOIN_ROOM:
            joinRoom();
        case TYPE_LEAVE_ROOM:
            leaveRoom();
        case TYPE_PING_ROOM:
            pingRoom();
        default:
            sendResponse(false, ERROR_BAD_REQUEST_DATA, null);
    }
?>