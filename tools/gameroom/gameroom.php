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
            .infoBar {
                border-left: solid grey 2px;
                height: 100vh;
                position: fixed;
                top: 50px;
                bottom: 0;
                right: 0;
                width: 27%;
            }
            .infoBarContent {
                padding-left: 3px;
            }
            .messagesInfoBarSection {
                position: fixed;
                bottom: 0;
                padding-bottom: 3px;
            }
            .gameroomStatusInfoBarSection {
                border-bottom: solid grey 2px;
            }
            .stacked {
                margin-bottom: 3px;
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
            <div class="infoBar">
                <div id="gameroomStatus" class="infoBarContent gameroomStatusInfoBarSection stacked">
                    <h4 id="roomStatusHeader">Room Status</h4>
                    <label id="noRoomLabel">You are not in a room.</label>
                    <label id="roomNameLabel"></label>
                    <br>
                    <input type="text" id="userNameInput" class="stacked" placeholder="Type your name."/>
                    <button id="setUserName">Set Name</button>
                    <br>
                    <!-- display these when the user is not in any room -->
                    <div id="gameroomCreationDiv">
                        <input type="text" id="roomNameInput" class="stacked" placeholder="Room Name"/>
                        <input type="password" id="roomPasswordInput" class="stacked" placeholder="Password"/>
                        <br>
                        <button id="createRoom" class="stacked">Create Room</button>
                        <button id="joinRoom" class="stacked">Join Room</button>
                    </div>

                    <!-- display these when the user is in a room -->
                    <div id="gameroomJoinedDiv" style="display:none;">
                        <h4 id="roomMembersHeader">Members</h4>
                        <div id="membersDiv"></div>
                        <button id="leaveRoom" class="stacked">Leave Room</button>
                    </div>
                </div>
                <div class="messagesInfoBarSection infoBarContent">
                    <h4 id="messagesHeader">Messages</h4>
                    <div id="messagesBlock"></div>
                    <input type="text" id="messageInput" placeholder="Type a message."/>
                    <button id="sendButton">Send</button>
                </div>
            </div>
            <div id="log"></div>
        </div>
    </body>
    <!-- Add javascript links here -->
    <script>
        const INTERFACE = <?php echo $INTERFACE_CONSTANTS; ?>;
    </script>
    <script src="peer.min.js"></script>
    <script src="jquery-2.2.0.min.js"></script>
    <script src="gameroom.js"></script>
</html>
