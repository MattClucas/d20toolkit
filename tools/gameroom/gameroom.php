<?php
    require_once("interfaceConstants.php");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Game Room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
        <link rel="stylesheet" href="../../css/bootswatch.min.css">
        <style>
            #infoBar {
                border-left: solid grey 2px;
                position: absolute;
                top: 50px;
                bottom: 0;
                right: 0;
                width: 27%;
                max-width: 300px;
                min-width: 245px;
            }
            .infoBarChild {
                padding-left: 3px;
                padding-right: 3px;
                clear: both;
            }
            #infoBarDivider {
                width: 100%;
                border-bottom: solid grey 2px;
                position: absolute;
                top: 164px
            }
            #messagesInfoBarChild {
                position: absolute;
                bottom: 0;
                height: calc( 100% - 166px );
            }
            #createRoom, #userNameInput {
                float: left;
            }
            #joinRoom, #setUserName, #sendButton {
                float: right;
            }
            #createRoom, #joinRoom {
                width: 49.5%;
            }
            .fullWidth {
                width: 100%;
                float: left;
            }
            #messagesBlock {
                overflow-y: auto;
                margin-top: 3px;
                height: calc( 100% - 31px );
                font-size: smaller;
            }
            #setUserName {
                width: 70px;
            }
            #userNameInput {
                width: calc( 100% - 73px ); /* 73px = setUserName width + 3px space */
            }
            #sendButton {
                width: 43px;
            }
            #messageInput {
                width: calc( 100% - 46px ); /* 46px = sendButton width + 3px space */
            }
            .infoBarUIElement {
                height: 25px;
                margin-bottom: 3px;
                margin-left: auto;
                margin-right: auto;
            }
            #membersDiv {
                overflow-y: auto;
            }
            #roomMembersHeader {
                font-size: medium;
            }
            .memberLabel {
                font-size: small;
                font-weight: bold;
                margin-bottom: 3px;
            }
            #roomStatusInfoBarChild {
                position: absolute;
                top: 0;
                max-height: calc( 50% - 1px );
            }
            .premessage {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
        ?>
        <div class="container">
            <h1>Game Room</h1>
            <div id="infoBar">
                <div id="roomStatusInfoBarChild" class="infoBarChild fullWidth">
                    <div class="fullWidth">
                        <label>Room: </label><label id="noRoomLabel">You are not in a room.</label>
                        <label id="roomNameLabel"></label>
                        <br>
                        <label>Name: </label><label id="userNameLabel"></label>
                        <br>
                        <div class="fullWidth">
                            <input type="text" id="userNameInput" class="infoBarUIElement"  placeholder="Type your name."/>
                            <button id="setUserName" class="infoBarUIElement btn btn-default btn-xs">Set Name</button>
                        </div>
                    </div>
                    <!-- display these when the user is not in any room -->
                    <div id="gameroomCreationDiv" class="fullWidth">
                        <input type="text" id="roomNameInput" class="fullWidth infoBarUIElement" placeholder="Room Name"/>
                        <input type="password" id="roomPasswordInput" class="fullWidth infoBarUIElement" placeholder="Password"/>
                        <button id="createRoom" class="infoBarUIElement btn btn-default btn-xs">Create Room</button>
                        <button id="joinRoom" class="infoBarUIElement btn btn-default btn-xs">Join Room</button>
                    </div>

                    <!-- display these when the user is in a room -->
                    <label id="roomMembersHeader" class="fullWidth" style="display: none;">Members</label>
                    <div id="membersDiv" class="fullWidth" style="display: none;"></div>
                    <button id="leaveRoom" class="infoBarUIElement fullWidth btn btn-default btn-xs" style="display: none;">Leave Room</button>
                </div>
                <div id="infoBarDivider" class="fullWidth"></div>
                <div id="messagesInfoBarChild" class="infoBarChild fullWidth">
                    <div id="messagesBlock" class="fullWidth"></div>
                    <div class="fullWidth">
                        <input type="text" id="messageInput" class="infoBarUIElement" placeholder="Type a message."/>
                        <button id="sendButton" class="infoBarUIElement btn btn-default btn-xs">Send</button>
                    </div>
                </div>
            </div>
            <h2>In development</h2>
            <div id="log" style="display: none;"></div>
        </div>
    </body>
    <!-- Add javascript links here -->
    <script>
        const INTERFACE = <?php echo $INTERFACE_CONSTANTS; ?>;
    </script>
    <script src="../../js/peer.min.js"></script>
    <script src="../../js/jquery-2.2.0.min.js"></script>
    <script src="../../js/parser.min.js"></script>
    <script src="../diceroller/diceParser.js"></script>
    <script src="gameroom.js"></script>
</html>
