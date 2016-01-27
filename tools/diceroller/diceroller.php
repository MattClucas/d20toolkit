<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Dice Roller</title>
    <!-- Author : Jacob Moyer -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="../../css/bootswatch.min.css">
</head>

<body>
    <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
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
