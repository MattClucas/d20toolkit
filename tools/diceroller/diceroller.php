<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Dice Roller</title>
</head>

<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div class="container">
        <h1>Dice Roller</h1>
        <label>Ex: 5d6 + 3d3 + 15 - 8</label>
        <br>
        <input type="text" id="inputBox" onkeydown="if(event.keyCode==13)document.getElementById('submitBtn').click()" autofocus/>
        <button id="submitBtn">Roll!</button>
        <br>
        <br>
        <input type="checkbox" id="clearText" />
        <label>Clear input after rolling?</label>
        <div style="padding-top: 10px;" id="output"></div>
    </div>
</body>
<script src="/js/parser.min.js"></script>
<script src="DiceParser.js"></script>
<script src="diceroller.js"></script>
</html>
