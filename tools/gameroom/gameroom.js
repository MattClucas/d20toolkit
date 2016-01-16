const PEER_MSG_TYPE_NAME_CHANGE = "name";
const PEER_MSG_TYPE_CHAT = "chat";

$(document).ready(function()
{
    var $roomNameInput = $("#roomNameInput");
    var $roomPasswordInput = $("#roomPasswordInput");
    var $noRoomLabel = $('#noRoomLabel');
    var $roomNameLabel = $('#roomNameLabel');
    var $gameroomCreationDiv = $('#gameroomCreationDiv');
    var $gameroomJoinedDiv = $('#gameroomJoinedDiv');
    var $userNameInput = $('#userNameInput');

    $logdiv = $('#log');
    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    var peer = new Peer(
    {
        key: '4hgaohcj6wbi6bt9',

        // Set highest debug level (log everything!).
        debug: 3,

        // Set a logging function:
        logFunction: function()
        {
            var copy = Array.prototype.slice.call(arguments).join(' ');
            $logdiv.append(copy + '<br>');
        }
    });
    var CONNECTED_PEERS = {
        IDS: []
    };
    var USER_ID = null;
    var USER_NAME;

    // Show this peer's ID.
    peer.on('open', function(id)
    {
        $logdiv.append("Created local id: " + id + "<br>");
        USER_ID = id;
    });

    peer.on('error', function(err)
    {
        $logdiv.append(err.toString() + "<br>");
    });

    function setupConnection(conn)
    {
        // check if this connection somehow already exists
        var prevConn = CONNECTED_PEERS[conn.peer];
        if (prevConn && prevConn.type == "data" && prevConn.open)
        {
            // connection already exists
            return;
        }

        // add the peer id to the array of ID's if it is not already
        if (CONNECTED_PEERS.IDS.indexOf(conn.peer) == -1)
        {
            CONNECTED_PEERS.IDS.push(conn.peer);
        }

        // add the conn to the list
        CONNECTED_PEERS[conn.peer] = conn;

        function receivePeerData(data)
        {
            if (!data)
            {
                $logdiv.append("Received empty message.");
                return;
            }

            switch (data.type)
            {
                case PEER_MSG_TYPE_NAME_CHANGE:
                    // update display name for this peer
                    break;
                case PEER_MSG_TYPE_CHAT:
                    // show chat message
                    break;
                default:
                    // handle bad message
                    break;
            }
        }

        conn.on('open', function()
        {
            // Receive messages
            conn.on('data', receivePeerData);

            // create display for connection
        });

        conn.on("close", function()
        {
            // remove the connection
            delete CONNECTED_PEERS[conn.peer];
            var peerIndex = CONNECTED_PEERS.IDS.indexOf(conn.peer);
            delete CONNECTED_PEERS.IDS[peerIndex];

            // remove display for connection
        });

        // log errors
        conn.on("error", function(err)
        {
            $logdiv.append(err.toString() + "<br>");
        });
    }

    // Await connections from others
    peer.on('connection', setupConnection);

    /**
     * Sends a request to roomAccess.php.
     * requestType - A string: Create, Join, Leave, or Ping. As specified by INTERFACE.TYPE_* variables.
     * passwordRequired - A boolean stating whether or not to require the password field to be filled out or not.
     * successFunc - The callback function to call on a successful request.
     * errorFunc - The callback function to call on a failed request.
     * roomname - Optional. The string stating the roomname. If not specified, whatever is in the roomNameInput will be tried.
     */
    function serverRequest(requestType, passwordRequired, successFunc, errorFunc, roomname)
    {
        // get and validate input from $roomNameInput
        if (!roomname)
        {
            roomname = $roomNameInput.val().trim();
            if (!roomname || roomname.length > 50)
            {
                alert("Enter a room name no more than 50 characters long.");
                return;
            }
        }

        if (passwordRequired)
        {
            // get and validate input from $roomPasswordInput
            var roompassword = $roomPasswordInput.val();
            if (!roompassword)
            {
                alert("Enter a password.");
                return;
            }
        }

        // check if the user id has been created yet
        if (!USER_ID)
        {
            // try again in 50 milliseconds
            setTimeout(serverRequest, 50, requestType, passwordRequired, successFunc, errorFunc, roomname);
        }

        // create request data
        var requestData = {};
        requestData[INTERFACE.REQUEST_TYPE] = requestType;
        requestData[INTERFACE.REQUEST_ROOM_NAME] = roomname;
        requestData[INTERFACE.REQUEST_ROOM_PASSWORD] = roompassword;
        requestData[INTERFACE.REQUEST_USER] = USER_ID;

        // send the request
        $.ajax(
        {
            type: "POST",
            url: "roomAccess.php",
            data: requestData,
            success: successFunc,
            error: errorFunc,
            dataType: "json"
        });
    }

    /**
     * The default error function to be used for server calls. It simply logs a messages saying it was unable to connect to the server.
     */
    function defaultErrorFunc(response)
    {
        $logdiv.append("Unable to connect to server.<br>");
    }

    /**
     * Will continuously ping the server and update the last checkin time for the current room.
     */
    function pingServer()
    {
        var roomname = $roomNameLabel.text().trim();
        if (!roomname)
        {
            return;
        }

        function successFunc(response)
        {
            if (!response[INTERFACE.RESPONSE_SUCCESS])
            {
                var msg = INTERFACE.TYPE_PING_ROOM + ": " + response[INTERFACE.RESPONSE_ERROR_CODE] + ": ";
                switch (response[INTERFACE.RESPONSE_ERROR_CODE])
                {
                    case INTERFACE.ERROR_BAD_REQUEST_DATA:
                        msg += "Request was either malformed or missing essential data.";
                        break;
                    case INTERFACE.ERROR_DATABASE_ISSUE:
                        msg += "The database is having problems.";
                        break;
                    case INTERFACE.ERROR_ROOM_DOES_NOT_EXIST:
                        msg += "Room does not exist.";
                        break;
                    case INTERFACE.ERROR_PASSWORD_INCORRECT:
                    case INTERFACE.ERROR_ROOM_ALREADY_EXISTS:
                    default:
                        msg += "Unexpected error code from server.";
                        break;
                }
                $logdiv.append(msg + '<br>');
                return;
            }
        }

        setTimeout(pingServer, 1000 * 60 * 5); // ping every 5 minutes
        serverRequest(INTERFACE.TYPE_PING_ROOM, false, successFunc, defaultErrorFunc);
    }

    /*
     * attach button click handlers
     */

    $('#setUserName').click(function()
    {
        USER_NAME = $userNameInput.val();

        // update all connected users of this change
    });

    $("#createRoom").click(function()
    {
        function successFunc(response)
        {
            if (!response[INTERFACE.RESPONSE_SUCCESS])
            {
                var msg = INTERFACE.TYPE_CREATE_ROOM + ": " + response[INTERFACE.RESPONSE_ERROR_CODE] + ": ";
                switch (response[INTERFACE.RESPONSE_ERROR_CODE])
                {
                    case INTERFACE.ERROR_BAD_REQUEST_DATA:
                        msg += "Request was either malformed or missing essential data.";
                        break;
                    case INTERFACE.ERROR_DATABASE_ISSUE:
                        msg += "The database is having problems.";
                        break;
                    case INTERFACE.ERROR_ROOM_ALREADY_EXISTS:
                        msg += "That room already exists.";
                        break;
                    case INTERFACE.ERROR_PASSWORD_INCORRECT:
                    case INTERFACE.ERROR_ROOM_DOES_NOT_EXIST:
                    default:
                        msg += "Unexpected error code from server.";
                        break;
                }
                $logdiv.append(msg + '<br>');
                return;
            }
            var msg = "Room created successfully.";
            $logdiv.append(msg + '<br>');

            // switch to active room UI
            $gameroomCreationDiv.hide();
            $noRoomLabel.hide();
            $gameroomJoinedDiv.show();
            $roomNameLabel.text($roomNameInput.val().trim());

            setTimeout(pingServer, 1000);
        }

        serverRequest(INTERFACE.TYPE_CREATE_ROOM, true, successFunc, defaultErrorFunc);
    });

    $("#joinRoom").click(function()
    {
        function successFunc(response)
        {
            if (!response[INTERFACE.RESPONSE_SUCCESS])
            {
                var msg = INTERFACE.TYPE_JOIN_ROOM + ": " + response[INTERFACE.RESPONSE_ERROR_CODE] + ": ";
                switch (response[INTERFACE.RESPONSE_ERROR_CODE])
                {
                    case INTERFACE.ERROR_BAD_REQUEST_DATA:
                        msg += "Request was either malformed or missing essential data.";
                        break;
                    case INTERFACE.ERROR_DATABASE_ISSUE:
                        msg += "The database is having problems.";
                        break;
                    case INTERFACE.ERROR_ROOM_DOES_NOT_EXIST:
                        msg += "That room does not exist.";
                        break;
                    case INTERFACE.ERROR_PASSWORD_INCORRECT:
                        msg += "The password is incorrect.";
                        break;
                    case INTERFACE.ERROR_ROOM_ALREADY_EXISTS:
                    default:
                        msg += "Unexpected error code from server.";
                        break;
                }
                $logdiv.append(msg + '<br>');
                return;
            }
            var msg = "Room joined successfully.";
            $logdiv.append(msg + '<br>');

            // switch to active room UI
            $gameroomCreationDiv.hide();
            $noRoomLabel.hide();
            $gameroomJoinedDiv.show();
            $roomNameLabel.text($roomNameInput.val().trim());

            setTimeout(pingServer, 1000);

            // connect to all peers from the server
            var members = JSON.parse(response[INTERFACE.RESPONSE_ROOM_MEMBERS]);
            for (var i = 0; i < members.length; i++)
            {
                var peerId = members[i];

                // don't connect to ourselves
                if (peerId == USER_ID)
                {
                    continue;
                }

                // check if this connection somehow already exists
                var prevConn = CONNECTED_PEERS[peerId];
                if (prevConn && prevConn.type == "data" && prevConn.open)
                {
                    // connection already exists
                    continue;
                }

                // create new connection
                var connection = peer.connect(peerId,
                {
                    reliable: true
                });
                setupConnection(connection);
            }
        }

        serverRequest(INTERFACE.TYPE_JOIN_ROOM, true, successFunc, defaultErrorFunc);
    });

    $("#leaveRoom").click(function()
    {
        var roomname = $roomNameLabel.text().trim();
        if (!roomname)
        {
            return;
        }

        function successFunc(response)
        {
            if (!response[INTERFACE.RESPONSE_SUCCESS])
            {
                var msg = INTERFACE.TYPE_LEAVE_ROOM + ": " + response[INTERFACE.RESPONSE_ERROR_CODE] + ": ";
                switch (response[INTERFACE.RESPONSE_ERROR_CODE])
                {
                    case INTERFACE.ERROR_BAD_REQUEST_DATA:
                        msg += "Request was either malformed or missing essential data.";
                        break;
                    case INTERFACE.ERROR_DATABASE_ISSUE:
                        msg += "The database is having problems.";
                        break;
                    case INTERFACE.ERROR_ROOM_DOES_NOT_EXIST:
                        msg += "That room does not exist.";
                        break;
                    case INTERFACE.ERROR_PASSWORD_INCORRECT:
                    case INTERFACE.ERROR_ROOM_ALREADY_EXISTS:
                    default:
                        msg += "Unexpected error code from server.";
                        break;
                }
                $logdiv.append(msg + '<br>');
                return;
            }
            var msg = "Left room successfully.";
            $logdiv.append(msg + '<br>');

            // switch to no joined rooms UI
            $gameroomCreationDiv.show();
            $noRoomLabel.show();
            $gameroomJoinedDiv.hide();
            $roomNameLabel.text("");

            // close all connections
            for (var i = 0; i < CONNECTED_PEERS.IDS.length; i++)
            {
                var peerId = CONNECTED_PEERS.IDS[i];
                if (peerId)
                {
                    CONNECTED_PEERS[peerId].close();
                }
            }
        }

        serverRequest(INTERFACE.TYPE_LEAVE_ROOM, false, successFunc, defaultErrorFunc, roomname);
    });

});

// Make sure things clean up properly.
window.onunload = window.onbeforeunload = function(e)
{
    $("#leaveRoom").click();

    if (!!peer && !peer.destroyed)
    {
        peer.destroy();
    }
};
