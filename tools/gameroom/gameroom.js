$(document).ready(function()
{
    const USER_COLOR_CSS_PREFIX = "user-";

    const HELP_MSG_AR = 'The aritchmancy solver command (/ar, /arithmancy) prompts the arithmancy ' +
        'solver tool. Syntax: "/ar spellname" where spellname is the name of the spell. ' +
        'For example, if the spell name is "Fireball", the input to this command would ' +
        'be "/ar fireball" and the outcome would be "/ar fireball => 2".';

    const HELP_MSG_SG = 'The sacred geometry command (/sg, /sacredgeometry) prompts the sacred geometry ' +
        'solver tool. Syntax: "/sg spellLevel diceRolls" where spellLevel is a number (1 through 9) ' +
        'representing the level of the spell, and diceRolls is a series of numbers representing the ' +
        'dice that were rolled (1 through 8). For example, if the effective spell level is 4 and the ' +
        'dice rolled were 5, 6, 3, 2, 4, and 4 for this spell, the input would be "/sg 4 563244" and ' +
        'a possible outcome would be "/sg 4 563244 => ((((4*2) *3) /4) *6) +5 = 41 in 13 guesses.".';

    const HELP_MSG_ROLL = 'The roll command (/r, /roll) is used to roll dice. ' +
        'Syntax: "/r expression" where expression is some mathmatical expression. ' +
        'Any text in the expression that matches the pattern "[number]d<number>" will be ' +
        'interpretted as dice and rolled. The [number] determines the number of dice and is ' +
        'optional and has a default value of 1. ' +
        'An example use of this command is "/r 3d6 + 5 * 8" which could have an outcome of ' +
        '"/r 3d6 + 5 * 8 => (5+3+4) + 5 * 8 = 52".';

    const HELP_MSG_HELP = 'The help command (/h, /help) displays information about how to use this tool and the commands available to the user. ' +
        'Syntax: "/h". ';

    const HELP_MSG_CREATE_OR_JOIN = 'To create a room, enter a room name. You may also add a password that others must enter to join ' +
        'the room. If the password is left blank, the room becomes open and others may join you randomly. To join a room, either ' +
        'enter the room name and password (if there is one) or just press the join room button without entering anything and you will ' +
        'join a random open room. Open rooms may not be randomly joined if there are already 6 people.';

    const HELP_MSG_GENERAL = 'The D20ToolKit Game Room is designed as a simple chat room that friends can use to quickly setup a Pathfinder or ' +
        'other similar styled game together across the internet. Create a room using the interface ' +
        'above and then share that room and password with your friends or whoever you wish to join you. ' +
        'This tool, like most of the content at D20ToolKit is currently in development as a hobby so there are ' +
        'likely to be bugs from time to time. This tool uses WebRTC technology which is fairly new and so for best ' +
        'results, please use an updated version of Chrome or Firefox.';

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
    var $onlineUsersLabel = $('#onlineUsersLabel');
    var $clearLocalCanvas = $('#clearLocalCanvas');
    var $canvasColorPicker = $('#canvasColorPicker');

    var players = {}; // hashmap of id -> player object
    var peerHandler = new PeerHandler();
    var roomHandler = new RoomHandler();
    var canvasHandler = new CanvasHandler(document.getElementById("drawCanvas"));
    canvasHandler.init();
    var unreadMessageNotifier = new UnreadMessageNotifier();
    peerHandler.setLoggingFunction(function(arguments)
    {
        var copy = Array.prototype.slice.call(arguments).join(' ');
        $logdiv.append(copy + '<br>');
    });

    var USER_NAME;
    var USER_COLOR = D20_UTIL.getRandomColor();
    peerHandler.setColor(USER_COLOR);

    peerHandler.addOpenListener(function(id)
    {
        players[id] = {};
        players[id].userName = USER_NAME || id;
        players[id].color = USER_COLOR;

        roomHandler.setUserId(id);

        $logdiv.append("Created local id: " + id + "<br>");
        $userNameLabel.text(id);
        $userNameLabel.addClass(USER_COLOR_CSS_PREFIX + id);

        // create css class for user's color
        D20_UTIL.createCSSSelector("." + USER_COLOR_CSS_PREFIX + id, "color: " + USER_COLOR + ";");
    });

    peerHandler.addErrorListener(function(err)
    {
        $logdiv.append(err.toString() + "<br>");
    });

    peerHandler.addPeerNameChangeListener(function(event)
    {
        players[event.peerId].userName = event.userName;

        // update display
        $('#' + event.peerId).html(D20_UTIL.escapeHtml(event.userName));
    });

    peerHandler.addPeerDrawListener(function(event)
    {
        var data = event[peerHandler.MSG_TYPE_DRAW];
        if (data.clear)
        {
            canvasHandler.clearLayer(event.peerId);
        }
        else
        {
            canvasHandler.drawLayerPoints(event.peerId, data.points, data.color, data.lineWidth);
        }
    });

    // message peers to update their layers whenever the local user draws
    canvasHandler.addDrawListener(function(event)
    {
        event.peerId = peerHandler.getUserId();
        peerHandler.sendMessage(peerHandler.MSG_TYPE_DRAW, event);
    });

    peerHandler.addPeerChatMsgListener(function(event)
    {
        showMessage(event.peerId, event.chat);
    });

    peerHandler.addPeerColorChangeListener(function(event)
    {
        players[event.peerId].color = event.color;
        D20_UTIL.createCSSSelector("." + USER_COLOR_CSS_PREFIX + D20_UTIL.escapeHtml(event.peerId),
            "color: " + D20_UTIL.escapeHtml(event.color) + ";");
    });

    peerHandler.addPeerOpenListener(function(peerId)
    {
        players[peerId] = {};
        players[peerId].userName = peerId;
        peerId = D20_UTIL.escapeHtml(peerId);
        // create display for connection
        $membersDiv.append('<div id="' + peerId + '" class="fullWidth memberLabel ' + USER_COLOR_CSS_PREFIX + peerId + '">' + peerId + '</div>');
        infoBarUpdateUI();
    });

    peerHandler.addPeerClosedListener(function(peerId)
    {
        // remove display for connection
        $('#' + peerId).remove();
        infoBarUpdateUI();
    });

    peerHandler.addPeerErrorListener(function(event)
    {
        $logdiv.append(event.error.toString() + "<br>");
    });

    function logAndAlertErrorMsg(msg)
    {
        $logdiv.append(msg + "<br>");
        alert(msg);
    }

    function initializeRoomHandler(roomHandler)
    {
        function badRequestFunc(data)
        {
            logAndAlertErrorMsg("Request was either malformed or missing essential data.");
        }

        function databaseIssueFunc(data)
        {
            logAndAlertErrorMsg("The database is having problems.");
        }

        function roomAlreadyExistsFunc(data)
        {
            logAndAlertErrorMsg("That room already exists.");
        }

        function defaultError(data)
        {
            logAndAlertErrorMsg("Unexpected response type from the server.");
        }

        function roomDoesNotExist(data)
        {
            logAndAlertErrorMsg("That room does not exist.");
        }

        // add create room listener
        var createRoomResponseListener = new RoomResponseHandler();
        createRoomResponseListener.setSuccessFunc(function(data)
        {
            $logdiv.append("Room created successfully.<br>");
            infoBarInRoomMode(data[INTERFACE.RESPONSE_ROOM_NAME]);
        });
        createRoomResponseListener.setErrorBadRequestFunc(badRequestFunc);
        createRoomResponseListener.setErrorDatabaseIssueFunc(databaseIssueFunc);
        createRoomResponseListener.setErrorRoomAlreadyExistsFunc(roomAlreadyExistsFunc);
        createRoomResponseListener.setErrorDefaultFunc(defaultError);
        roomHandler.addCreateRoomListener(createRoomResponseListener);

        // add join room listener
        var joinRoomResponseListener = new RoomResponseHandler();
        joinRoomResponseListener.setSuccessFunc(function(data)
        {
            $logdiv.append("Room joined successfully.<br>");
            infoBarInRoomMode(data[INTERFACE.RESPONSE_ROOM_NAME]);

            // connect to all peers from the server
            var members = JSON.parse(data[INTERFACE.RESPONSE_ROOM_MEMBERS]);
            peerHandler.connectToPeers(members);
        });
        joinRoomResponseListener.setErrorBadRequestFunc(badRequestFunc);
        joinRoomResponseListener.setErrorDatabaseIssueFunc(databaseIssueFunc);
        joinRoomResponseListener.setErrorRoomDoesNotExistFunc(function(data)
        {
            $logdiv.append("The room we tried to join did not exist. Might need to create our own room.<br>");
            if (data.roomName)
            {
                logAndAlertErrorMsg("The room: " + data.roomName + " does not exist.");
            }
            else
            {
                createRoomWhenNoneAreOpenToJoin();
            }
        });
        joinRoomResponseListener.setErrorPasswordIncorrectFunc(function(data)
        {
            logAndAlertErrorMsg("Incorrect password.");
        });
        joinRoomResponseListener.setErrorDefaultFunc(defaultError);
        roomHandler.addJoinRoomListener(joinRoomResponseListener);

        // add leave room listener
        var leaveRoomResponseListener = new RoomResponseHandler();
        leaveRoomResponseListener.setErrorBadRequestFunc(badRequestFunc);
        leaveRoomResponseListener.setErrorDatabaseIssueFunc(databaseIssueFunc);
        leaveRoomResponseListener.setErrorRoomDoesNotExistFunc(roomDoesNotExist);
        leaveRoomResponseListener.setErrorDefaultFunc(defaultError);
        roomHandler.addLeaveRoomListener(leaveRoomResponseListener);

        // add update user count listener
        var updateUserCountListener = new RoomResponseHandler();
        updateUserCountListener.setSuccessFunc(function(data)
        {
            var onlineUsers = data[INTERFACE.RESPONSE_NUM_USERS] || "Unknown";
            $onlineUsersLabel.text(onlineUsers);
        });
        updateUserCountListener.setErrorBadRequestFunc(badRequestFunc);
        updateUserCountListener.setErrorDatabaseIssueFunc(databaseIssueFunc);
        updateUserCountListener.setErrorDefaultFunc(defaultError);
        roomHandler.addUpdateUserCountListener(updateUserCountListener);

        // add ping listener
        var pingListener = new RoomResponseHandler();
        pingListener.setErrorDefaultFunc(function(data)
        {
            logAndAlertErrorMsg("Error occurred when pinging the server.")
        });
        roomHandler.addPingListener(pingListener);

        roomHandler.init();
    }

    function createRoomWhenNoneAreOpenToJoin()
    {
        if (!roomHandler || !roomHandler.getUserId())
        {
            return;
        }

        if (createRoomWhenNoneAreOpenToJoin.shouldRun)
        {
            $logdiv.append("Creating our own room.<br>");
            roomHandler.createRoom(roomHandler.getUserId() + "'s room");
        }
    }

    // start the peer and room handlers
    peerHandler.init();
    initializeRoomHandler(roomHandler);

    function showMessage(peerId, message)
    {
        // allow 1px inaccuracy by adding 1
        var isScrolledToBottom = $messagesBlock[0].scrollHeight - $messagesBlock[0].clientHeight <= $messagesBlock[0].scrollTop + 1;

        var displayName = players[peerId].userName;
        var escapedId = D20_UTIL.escapeHtml(peerId);
        var escapedName = D20_UTIL.escapeHtml(displayName);
        var escapedMsg = D20_UTIL.escapeHtml(message);
        var linkedMsg = anchorme.js(escapedMsg);

        // give a class "user-(id)" so each user can have a custom style
        $messagesBlock.append('<div class="fullWidth"><span class="premessage ' + USER_COLOR_CSS_PREFIX + escapedId + '">' +
            escapedName + ':</span> ' +
            linkedMsg + '</div>');

        if (isScrolledToBottom)
        {
            $messagesBlock[0].scrollTop = $messagesBlock[0].scrollHeight - $messagesBlock[0].clientHeight;
        }
        unreadMessageNotifier.addMessage();
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

    function infoBarInRoomMode(roomName)
    {
        // switch to active room UI
        $gameroomCreationDiv.hide();
        $noRoomLabel.hide();
        $leaveRoomBtn.show();
        $roomMembersHeader.show();
        $membersDiv.show();
        $roomNameLabel.text(roomName || $roomNameInput.val().trim());
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

    function sendChatMessage()
    {
        var input = $messageInput.val().trim();
        $messageInput.val("");
        $messageInput.focus();

        // check if there was anything typed before actually doing stuff
        if (!input)
        {
            return;
        }

        function getCommand(chatString)
        {
            // make sure chatString is a string of the format "/*"
            if (!chatString || typeof chatString !== "string" || chatString.charAt(0) !== "/")
            {
                return null;
            }

            // get whatever comes after the first "/" and before the first space
            // "/command blah blah blah" gets "command"
            var command = chatString.split(/(\s+)/)[0];
            if (command.length <= 1)
            {
                return null;
            }

            return command.substring(1).toLowerCase();
        }

        var messageToSend = input;
        var broadcast = true; // whether or not to spam this to the room
        var command = getCommand(input);
        if (command)
        {
            // parse everything after the command
            var commandInput = input.substring(command.length + 1);

            switch (command)
            {
                // roll
                case 'r':
                case "roll":
                    // display help message if nothing is entered.
                    if (!commandInput)
                    {
                        broadcast = false;
                        messageToSend = HELP_MSG_ROLL;
                        break;
                    }

                    // find all instances of the number"d"number and roll it
                    var parsedInput = DiceParser.replaceDiceString(commandInput);

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
                case "sg":
                case "sacredgeometry":
                    if (!commandInput)
                    {
                        broadcast = false;
                        messageToSend = HELP_MSG_SG;
                        break;
                    }
                    // commandInput should become ["spellLevel", "space", "diceRolls"]
                    var commandInput = commandInput.trim().split(/(\s+)/);
                    if (commandInput.length < 3)
                    {
                        broadcast = false;
                        messageToSend = HELP_MSG_SG;
                        break;
                    }
                    // TODO make number of guesses optional
                    var outcome = SacredGeometry.wizard(commandInput[0], commandInput[2], true);
                    messageToSend = input + " => " + outcome;
                    break;
                case "ar":
                case "arithmancy":
                    if (!commandInput)
                    {
                        broadcast = false;
                        messageToSend = HELP_MSG_AR;
                        break;
                    }
                    var outcome = Arithmancy.digitalRoot(commandInput);
                    messageToSend = input + " => " + outcome;
                    break;
                case 'h':
                case "help":
                    broadcast = false;
                    messageToSend = HELP_MSG_GENERAL + "\n\n" + HELP_MSG_CREATE_OR_JOIN + "\n\n" + HELP_MSG_HELP + "\n\n" + HELP_MSG_ROLL + "\n\n" + HELP_MSG_SG +
                        "\n\n" + HELP_MSG_AR;
                    break;
                default:
                    messageToSend = input;
            }
        }

        // send message to all connected users
        if (broadcast)
        {
            peerHandler.sendMessage(peerHandler.MSG_TYPE_CHAT, messageToSend);
        }

        // show ourselves the message
        showMessage(peerHandler.getUserId(), messageToSend);
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
            alert("Please enter a name from 1 to 25 characters long.");
            return;
        }

        $userNameInput.val("");
        USER_NAME = userName;
        if (peerHandler.getUserId())
        {
            players[peerHandler.getUserId()].userName = userName;
        }
        $userNameLabel.text(D20_UTIL.escapeHtml(userName));
        peerHandler.setUserName(userName);
    });

    // when enter is pressed on the user name input it automatically clicks the set name button
    $userNameInput.keyup(function(event)
    {
        if (event.keyCode == 13)
        {
            $('#setUserName').click();
        }
    });

    $('#sendButton').click(sendChatMessage);

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
        var roomname = $roomNameInput.val().trim();
        if (!roomname || roomname.length > 50)
        {
            alert("Please enter a room name from 1 to 50 characters long.");
            return;
        }
        var roompassword = $roomPasswordInput.val();
        roomHandler.createRoom(roomname, roompassword);
    });

    $("#joinRoom").click(function()
    {
        var roomname = $roomNameInput.val().trim();
        var roompassword = $roomPasswordInput.val();

        // if there are no open rooms to join we should make our own
        createRoomWhenNoneAreOpenToJoin.shouldRun = !roomname;
        roomHandler.joinRoom(roomname, roompassword);
    });

    function leaveRoom()
    {
        roomHandler.leaveRoom();
        infoBarNoRoomMode();
        peerHandler.disconnectFromPeers();
    }

    $leaveRoomBtn.click(leaveRoom);

    $clearLocalCanvas.click(function()
    {
        canvasHandler.clearLocalLayer();
    });

    $canvasColorPicker.on('input', function()
    {
        canvasHandler.setColor($canvasColorPicker.val());
    });

    $("#toggleGridLines").click(function()
    {
        canvasHandler.toggleGridLines();
    });

    $('#scaleInput').on('change', function()
    {
        canvasHandler.setScale($(this).val());
    });

    var $distanceLabel = $('#distanceMeasurementLabel');
    canvasHandler.setDistanceCallback(function(distance)
    {
        $distanceLabel.text(distance);
    });

    $('#initiative-tracker').load('initiative-tracker/initiative-tracker.html');

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function(e)
    {
        leaveRoom();
        if (!!peer && !peer.destroyed)
        {
            peer.destroy();
        }

        return null;
    };
});