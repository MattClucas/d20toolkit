<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Sacred Geometry Calculator</title>
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div class="container">
        <h1>Pathfinder Sacred Geometry Solver</h1>

        <a href="http://www.d20pfsrd.com/feats/general-feats/sacred-geometry">See the rules.</a>
        <a href="https://play.google.com/store/apps/details?id=com.clucasprojects.sacredgeometry&hl=en">Get the Android app.</a>

        <br>
        <br>Spell Level
        <select id="spellLevelSelect"></select>
        <br>
        <br>
        <label>Enter one digit for each dice</label>
        <br>
        <label>Ex: rolled: 5, 6, 3, 2, 4, 4 -> input: "563244"</label>
        <br>Rolled Numbers
        <input type="text" id="rolledNumbers" onkeydown="if(event.keyCode==13)document.getElementById('calculateButton').click()" autofocus/>
        <br>
        <br>
        <button id="calculateButton">Wizard!</button>

        <h4>Results</h4>
        <div id="result"></div>
    </div>
</body>
<script src="SacredGeometry.js"></script>
<script src="sacredgeo.js"></script>
</html>
