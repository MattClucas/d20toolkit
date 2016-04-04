<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Combat Tracker</title>
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div id="mainDiv" class="container">
        <h1>Combat Tracker</h1>
        <div id="addUserDiv" class="col-md-4">
            <input type="text" id="userNameInput" class="form-control" onkeydown="if(event.keyCode==13)document.getElementById('addUserButton').click()" placeholder='Name. Ex: "Richmond"'>
            <br>
            <input type="text" id="initiativeInput" class="form-control" onkeydown="if(event.keyCode==13)document.getElementById('addUserButton').click()" placeholder='Initative. Ex: "d20 + 5" or "17"'>
            <br>
            <button id="addUserButton" class="btn btn-block btn-default">Add User</button>
            <button id="startCombatButton" class="btn btn-block btn-default">Start Combat</button>
            <label>Current Round:</label><label id="roundLabel">0</label>
        </div>
        <div id="trackerDiv" class="col-md-8">
        </div>
    </div>
</body>
<script src="/js/parser.min.js"></script>
<script src="/js/d20toolkitUtil.js"></script>
<script src="/tools/diceroller/DiceParser.js"></script>
<script src="/js/jquery-2.2.0.min.js"></script>
<script src="CombatTracker.js"></script>
<script src="main.js"></script>
</html>
