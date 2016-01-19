$(document).ready(function()
{
    const PEER_MSG_TYPE_NAME_CHANGE = "name";
    const PEER_MSG_TYPE_CHAT = "chat";
    const PEER_MSG_TYPE_COLOR = "color";

    const USER_COLOR_CSS_PREFIX = "user-";

    const HELP_MSG_ROLL = "The roll command (/r) is used to roll virtual dice. " +
        'Syntax: "/r expression" where expression is some mathmatical expression. ' +
        'Any text in the expression that matches the pattern "[number]d<number>" will be ' +
        'interpretted as dice and rolled. The [number] determines the number of dice and is ' +
        'optional and has a default value of 1. ' +
        'An example use of this command is "/r 3d6 + 5 * 8" which could have an outcome of ' +
        '"/r 3d6 + 5 * 8 => (5+3+4) + 5 * 8 = 52".';

    const HELP_MSG_HELP = 'The help command (/h) displays information about how to use this tool and the commands available to the user. ' +
        'Syntax: "/h". ';

    const HELP_MSG_GENERAL = 'The D20ToolKit Game Room is designed as a simple chat room that friends can use to quickly setup a Pathfinder or ' +
        'other similar styled game together across the internet. Create a room using the interface ' +
        'above and then share that room and password with your friends or whoever you wish to join you. ' +
        'This tool, like most of the content at D20ToolKit is currently in development as a hobby so there are ' +
        'likely to be bugs from time to time. Currently this tool only supports a chat system and allows users to ' +
        'roll dice too using the roll command. This tool uses WebRTC technology which is fairly new and so for best ' +
        'results, please use an updated version of Chrome or Firefox.';

    const ENTITY_MAP = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string)
    {
        return String(string).replace(/[&<>"'\/]/g, function(s)
        {
            return ENTITY_MAP[s];
        });
    }

    // returns a random color hex code
    function randomColor()
    {
        return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
    }

    // creates a css selector
    // use like createCSSSelector('.someClass', 'color: red; height: 10px;');
    function createCSSSelector(selector, style)
    {
        if (!document.styleSheets)
        {
            return;
        }

        if (document.getElementsByTagName('head').length == 0)
        {
            return;
        }

        var stylesheet, mediaType, i;

        if (document.styleSheets.length > 0)
        {
            for (i = 0; i < document.styleSheets.length; i++)
            {
                if (document.styleSheets[i].disabled)
                {
                    continue;
                }
                var media = document.styleSheets[i].media;
                mediaType = typeof media;

                if (mediaType == 'string')
                {
                    if (media == '' || (media.indexOf('screen') != -1))
                    {
                        styleSheet = document.styleSheets[i];
                    }
                }
                else if (mediaType == 'object')
                {
                    if (media.mediaText == '' || (media.mediaText.indexOf('screen') != -1))
                    {
                        styleSheet = document.styleSheets[i];
                    }
                }

                if (typeof styleSheet != 'undefined')
                {
                    break;
                }
            }
        }

        if (typeof styleSheet == 'undefined')
        {
            var styleSheetElement = document.createElement('style');
            styleSheetElement.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(styleSheetElement);

            for (i = 0; i < document.styleSheets.length; i++)
            {
                if (document.styleSheets[i].disabled)
                {
                    continue;
                }
                styleSheet = document.styleSheets[i];
            }

            var media = styleSheet.media;
            mediaType = typeof media;
        }

        if (mediaType == 'string')
        {
            for (i = 0; i < styleSheet.rules.length; i++)
            {
                if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase())
                {
                    styleSheet.rules[i].style.cssText = style;
                    return;
                }
            }

            styleSheet.addRule(selector, style);
        }
        else if (mediaType == 'object')
        {
            var styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;

            for (i = 0; i < styleSheetLength; i++)
            {
                if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase())
                {
                    styleSheet.cssRules[i].style.cssText = style;
                    return;
                }
            }

            styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
        }
    }

    var $roomNameInput = $("#roomNameInput");
    var $roomPasswordInput = $("#roomPasswordInput");
    var $noRoomLabel = $('#noRoomLabel');
    var $roomNameLabel = $('#roomNameLabel');
    var $gameroomCreationDiv = $('#gameroomCreationDiv');
    var $userNameInput = $('#userNameInput');
    var $logdiv = $('#log');
    var $membersDiv = $('#membersDiv');
    var $messagesBlock = $('#messagesBlock');
    var $messageInput = $('#messageInput');
    var $userNameLabel = $('#userNameLabel');
    var $roomStatusInfoBarChild = $('#roomStatusInfoBarChild');
    var $messagesInfoBarChild = $('#messagesInfoBarChild');
    var $infoBarDivider = $('#infoBarDivider');
    var $infoBar = $('#infoBar');
    var $leaveRoomBtn = $('#leaveRoom');
    var $roomMembersHeader = $('#roomMembersHeader');

    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    var peer = new Peer(
    {
        key: '4hgaohcj6wbi6bt9',

        // Set highest debug level (log everything!).
        debug: 3,

        config:
        {
            'iceServers': [
            {
                url: 'stun:stun.l.google.com:19302'
            },
            {
                url: 'turn:numb.viagenie.ca',
                credential: 'muazkh',
                username: 'webrtc@live.com'
            }]
        },

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
    var USER_COLOR = randomColor();

    // Show this peer's ID.
    peer.on('open', function(id)
    {
        id = escapeHtml(id);
        $logdiv.append("Created local id: " + id + "<br>");
        $userNameLabel.text(id);
        $userNameLabel.addClass(USER_COLOR_CSS_PREFIX + id);
        USER_ID = id;

        // create css class for user's color
        createCSSSelector("." + USER_COLOR_CSS_PREFIX + USER_ID, "color: " + USER_COLOR + ";");
    });

    peer.on('error', function(err)
    {
        $logdiv.append(err.toString() + "<br>");
    });

    function updatePeerName(peerId, name)
    {
        CONNECTED_PEERS[peerId].peerName = name;

        // update display
        $('#' + peerId).html(escapeHtml(name));
    }

    function showMessage(peerId, message)
    {
        // allow 1px inaccuracy by adding 1
        var isScrolledToBottom = $messagesBlock[0].scrollHeight - $messagesBlock[0].clientHeight <= $messagesBlock[0].scrollTop + 1;

        var name = (CONNECTED_PEERS[peerId] && CONNECTED_PEERS[peerId].peerName) || peerId || USER_NAME || USER_ID;

        // give a class "user-(id)" so each user can have a custom style
        var id = peerId || USER_ID;
        $messagesBlock.append('<div class="fullWidth"><span class="premessage ' + USER_COLOR_CSS_PREFIX + escapeHtml(id) + '">' +
            escapeHtml(name) + ':</span> ' +
            escapeHtml(message) + '</div>');

        if (isScrolledToBottom)
        {
            $messagesBlock[0].scrollTop = $messagesBlock[0].scrollHeight - $messagesBlock[0].clientHeight;
        }
    }

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
                    updatePeerName(conn.peer, data.content);
                    break;
                case PEER_MSG_TYPE_CHAT:
                    showMessage(conn.peer, data.content);
                    break;
                case PEER_MSG_TYPE_COLOR:
                    createCSSSelector("." + USER_COLOR_CSS_PREFIX + conn.peer, "color: " + escapeHtml(data.content) + ";");
                default:
                    break;
            }
        }

        conn.on('open', function()
        {
            // Receive messages
            conn.on('data', receivePeerData);

            // create display for connection
            $membersDiv.append('<div id="' + conn.peer + '" class="fullWidth memberLabel ' + USER_COLOR_CSS_PREFIX + conn.peer + '">' + conn.peer + '</div>');
            infoBarUpdateUI();

            // send the peer our color
            CONNECTED_PEERS[conn.peer].send(
            {
                type: PEER_MSG_TYPE_COLOR,
                content: USER_COLOR
            });

            // send the peer our user name
            if (USER_NAME)
            {
                CONNECTED_PEERS[conn.peer].send(
                {
                    type: PEER_MSG_TYPE_NAME_CHANGE,
                    content: USER_NAME
                });
            }
        });

        conn.on("close", function()
        {
            // remove the connection
            delete CONNECTED_PEERS[conn.peer];
            var peerIndex = CONNECTED_PEERS.IDS.indexOf(conn.peer);
            delete CONNECTED_PEERS.IDS[peerIndex];

            // remove display for connection
            $('#' + conn.peer).remove();
            infoBarUpdateUI();
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

    function infoBarUpdateUI()
    {
        // allow 1px inaccuracy by adding 1
        var isScrolledToBottom = $messagesBlock[0].scrollHeight - $messagesBlock[0].clientHeight <= $messagesBlock[0].scrollTop + 1;

        var infoBarHeight = $infoBar.height();
        var statusHeight = $roomStatusInfoBarChild.height();
        var dividerHeight = 2;
        $infoBarDivider.css(
        {
            "top": statusHeight
        });

        var messagesHeight = infoBarHeight - (statusHeight + dividerHeight);
        $messagesInfoBarChild.css(
        {
            "height": messagesHeight
        });

        if (isScrolledToBottom)
        {
            $messagesBlock[0].scrollTop = $messagesBlock[0].scrollHeight - $messagesBlock[0].clientHeight;
        }

        // force membersDiv to fit in statusHeight
        // maximum height is the maximum height of the roomStatusInfoBarChild - 135px because there are 135px of other elements in it
        // the maximum height of the roomStatusInfoBarChild is infoBarHeight * 0.5 - 1px
        $membersDiv.css(
        {
            "max-height": infoBarHeight * 0.5 - 136
        });
    }

    function infoBarInRoomMode()
    {
        // switch to active room UI
        $gameroomCreationDiv.hide();
        $noRoomLabel.hide();
        $leaveRoomBtn.show();
        $roomMembersHeader.show();
        $membersDiv.show();
        $roomNameLabel.text($roomNameInput.val().trim());
        infoBarUpdateUI();
    }

    function infoBarNoRoomMode()
    {
        // switch to no joined rooms UI
        $gameroomCreationDiv.show();
        $noRoomLabel.show();
        $leaveRoomBtn.hide();
        $roomMembersHeader.hide();
        $membersDiv.hide();
        $roomNameLabel.text("");
        infoBarUpdateUI();
    }

    /*
     * attach button click handlers
     */

    $('#setUserName').click(function()
    {
        var userName = $userNameInput.val().trim();

        // check if there was anything typed before actually doing stuff
        if (!userName)
        {
            return;
        }

        if (userName.length > 25)
        {
            alert("Please enter a name less than 25 characters long.");
            return;
        }

        $userNameInput.val("");
        USER_NAME = userName;
        $userNameLabel.text(escapeHtml(USER_NAME));

        // update all connected users knowledge of this change
        for (var i = 0; i < CONNECTED_PEERS.IDS.length; i++)
        {
            var peerId = CONNECTED_PEERS.IDS[i];
            if (peerId)
            {
                CONNECTED_PEERS[peerId].send(
                {
                    type: PEER_MSG_TYPE_NAME_CHANGE,
                    content: USER_NAME
                });
            }
        }
    });

    // when enter is pressed on the user name input it automatically clicks the set name button
    $userNameInput.keyup(function(event)
    {
        if (event.keyCode == 13)
        {
            $('#setUserName').click();
        }
    });

    $('#sendButton').click(function()
    {
        var input = $messageInput.val().trim();
        $messageInput.val("");
        $messageInput.focus();

        // check if there was anything typed before actually doing stuff
        if (!input)
        {
            return;
        }

        var messageToSend = input;
        var broadcast = true; // whether or not to spam this to the room
        if (input.charAt(0) == "/")
        {
            var command = input.charAt(1);
            switch (command)
            {
                // roll
                case 'r':
                    // parse everything after the "/r"
                    var commInput = input.substring(2);

                    // display help message is nothing is entered.
                    if (!commInput)
                    {
                        broadcast = false;
                        messageToSend = HELP_MSG_ROLL;
                        break;
                    }

                    // find all instances of the number"d"number and roll it
                    var parsedInput = replaceDiceString(commInput);

                    // try to evaluate the total
                    messageToSend = input + " => " + parsedInput + " = ";
                    try
                    {
                        // uses parser.js to evaluate any total
                        var total = Parser.evaluate(parsedInput);
                        messageToSend += total;
                    }
                    catch (error)
                    {
                        broadcast = false;
                        messageToSend += error.toString();
                    }
                    break;
                case 'h':
                    broadcast = false;
                    messageToSend = HELP_MSG_GENERAL + "\n" + HELP_MSG_HELP + "\n" + HELP_MSG_ROLL;
                    break;
                default:
                    messageToSend = input;
            }
        }

        // send message to all connected users
        if (broadcast)
        {
            for (var i = 0; i < CONNECTED_PEERS.IDS.length; i++)
            {
                var peerId = CONNECTED_PEERS.IDS[i];
                if (peerId)
                {
                    CONNECTED_PEERS[peerId].send(
                    {
                        type: PEER_MSG_TYPE_CHAT,
                        content: messageToSend
                    });
                }
            }
        }

        // show ourselves the message
        showMessage(null, messageToSend);
    });

    // when enter is pressed on the message input it automatically clicks the send button
    $messageInput.keyup(function(event)
    {
        if (event.keyCode == 13)
        {
            $('#sendButton').click();
        }
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

            infoBarInRoomMode();

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

            infoBarInRoomMode();

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

    $leaveRoomBtn.click(function()
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

            infoBarNoRoomMode();

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
    $leaveRoomBtn.click();

    if (!!peer && !peer.destroyed)
    {
        peer.destroy();
    }
};