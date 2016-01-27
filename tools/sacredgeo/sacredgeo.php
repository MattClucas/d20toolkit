<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Sacred Geometry Calculator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="../../css/bootswatch.min.css">
    <script src="SacredGeometry.js"></script>
    <script src="sacredgeo.js"></script>
</head>

<body>
    <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
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
            <input type="text" id="rolledNumbers" />
            <br>
            <br>
            <button id="calculateButton">Wizard!</button>

            <h4>Results</h4>
            <div id="result"></div>
        </div>
</body>

</html>
