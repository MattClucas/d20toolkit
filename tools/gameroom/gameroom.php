<?php
    $ROOT = $_SERVER['DOCUMENT_ROOT'];
    include_once($ROOT . '/no-mobile.php');
    require_once("interfaceConstants.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Game Room</title>
    <link rel="stylesheet" href="gameroom.css">
    <link rel="stylesheet" href="/tools/bestiaryfuzzy/bestiaryfuzzy.css">
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
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
        <div class="canvasParent">
            <canvas id="drawCanvas" oncontextmenu="return false;" tabindex="1000">
                Please use a browser that supports "canvas"
            </canvas>
            <br>
            <button id="clearLocalCanvas" class="btn btn-default">Clear Local Drawing</button>
            <button id="toggleGridLines" class="btn btn-default">Toggle Grid Lines</button>
            <input type="color" id="canvasColorPicker">
            <label>Scale:</label><input type="number" step="0.1" min="0.1" max="2.5" value="1" id="scaleInput"/>
            <label>Distance:</label><label id="distanceMeasurementLabel"></label>
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
<script src="/js/anchorme.min.js"></script>
<script src="/js/peer.min.js"></script>
<script src="/js/jquery-2.2.0.min.js"></script>
<script src="/js/parser.min.js"></script>
<script src="/js/d20toolkitUtil.js"></script>
<script src="../diceroller/DiceParser.js"></script>
<script src="../sacredgeo/SacredGeometry.js"></script>
<script src="../arithmancy/Arithmancy.js"></script>
<script src="PeerHandler.js"></script>
<script src="RoomHandler.js"></script>
<script src="UnreadMessageNotifier.js"></script>
<script src="CanvasHandler.js"></script>
<script src="/js/list.min.js"></script>
<script src="/tools/bestiaryfuzzy/bestiaryPage.js"></script>
<script src="/tools/bestiaryfuzzy/list.fuzzysearchCustom.js"></script>
<script src="gameroom.js"></script>
</html>
