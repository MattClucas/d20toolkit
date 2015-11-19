<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Sacred Geometry Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
        <link rel="stylesheet" href="../../css/bootswatch.min.css">
        <script src="sacredgeo.js" async></script>
    </head>
    <body>
        <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
        ?>
        <div class="container">
            <h1>Pathfinder Sacred Geometry Solver</h1>

            <h6>Algorithm by Matt Clucas - Web version by Jacob Moyer</h6>

            <a href="http://www.d20pfsrd.com/feats/general-feats/sacred-geometry">See the rules.</a>

            <a href="https://play.google.com/store/apps/details?id=com.clucasprojects.sacredgeometry&hl=en">Get the Android app.</a>

            </br>
            </br>Spell Level
            <select id="spellLevelSelect"></select>
            </br>
            </br>Rolled Numbers
            <input type="text" id="rolledNumbers" />
            </br>
            </br>
            <button id="calculateButton">Wizard!</button>

            <h4>Result</h4>

            <div id="result"></div>
        </div>
    </body>
</html>
