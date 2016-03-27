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
        <link rel="stylesheet" href="gameroom.css">
        <link rel="stylesheet" href="/d20toolkit/tools/bestiaryfuzzy/bestiaryfuzzy.css">
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
                        <input type="text" id="roomNameInput" class="fullWidth infoBarUIElement" placeholder="Enter Room Name or Join Random"/>
                        <input type="password" id="roomPasswordInput" class="fullWidth infoBarUIElement" placeholder="Enter Password or Leave Open"/>
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
                        <div id="fuzzy-list-container">
                            <div class="scrollbar" style="display: none;">
                                <ul class="list">
                                </ul>
                            </div>
                            <input type="text" id="messageInput" class="infoBarUIElement fuzzy-search" placeholder="Type a message."/>
                            <button id="sendButton" class="infoBarUIElement btn btn-default btn-xs">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <p>Type "/help" into the messsage bar at the bottom right for usage information.</p>
            <div class="canvasParent">
                <canvas id="drawCanvas">
                    Please use a browser that supports "canvas"
                </canvas>
                <br>
                <button id="clearLocalCanvas" class="btn btn-default">Clear Local Drawing</button>
                <input type="color" id="canvasColorPicker">
            </div>
            <div id="onlineUsersDiv">
                <label>Users In Rooms: </label><label id="onlineUsersLabel">Unknown</label><label>/50</label>
            </div>
            <div id="log" style="display: none;"></div>
        </div>
    </body>
    <!-- Add javascript links here -->
    <script>
        const INTERFACE = <?php echo $INTERFACE_CONSTANTS; ?>;
    </script>
    <script src="/d20toolkit/js/peer.min.js"></script>
    <script src="/d20toolkit/js/jquery-2.2.0.min.js"></script>
    <script src="/d20toolkit/js/parser.min.js"></script>
    <script src="/d20toolkit/js/d20toolkitUtil.js"></script>
    <script src="../diceroller/DiceParser.js"></script>
    <script src="../sacredgeo/SacredGeometry.js"></script>
    <script src="../arithmancy/Arithmancy.js"></script>
    <script src="PeerHandler.js"></script>
    <script src="RoomHandler.js"></script>
    <script src="UnreadMessageNotifier.js"></script>
    <script src="CanvasHandler.js"></script>
    <script src="http://listjs.com/no-cdn/list.js"></script>
    <script src="/d20toolkit/tools/bestiaryfuzzy/bestiaryPage.js"></script>
    <script src="/d20toolkit/js/list.fuzzysearch.js"></script>
    <script src="gameroom.js"></script>
</html>
