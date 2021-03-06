<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Pathfinder Toolkit</title>
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div class="container">
        <div class="page-header" id="banner">
            <div class="row">
                <div class="col-lg-8 col-md-7 col-sm-6">
                    <h1>Welcome to D20ToolKit!</h1>
                    <p class="lead">Here you will find tools for The Pathfinder Roleplaying Game, as well as other useful resources.</p>
                    <div class="intro">
                        <h3>Custom Tools</h3>
                        <h4><a href="./tools/ar/arithmancy.php">Arithmancy Calculator</a></h4>
                        <label>A calculator for the Arithmancy feat.</label>
                        <h4><a href="./tools/ct/combattracker.php">Combat Tracker</a></h4>
                        <label>A tool which tracks creature initiatives and actions during combat.</label>
                        <h4><a href="./tools/dr/diceroller.php">Dice Roller</a></h4>
                        <label>A simple tool for rolling dice.</label>
                        <h4><a href="./tools/gr/gameroom.php">Game Room</a></h4>
                        <label>A chat room tool that allows games over the internet. Text and Drawing only.</label>
                        <h4><a href="./tools/sg/sacredgeo.php">Sacred Geometry Calculator</a></h4>
                        <label>A calculator for the Sacred Geometry feat.</label>
                        <h4>
                            <a href="./tools/tr/tableroller.php">Table Roller</a> -
                            <a href="./tools/tr/links.php">Library of Tables</a>
                        </h4>
                        <label>A tool for generating tables of items and randomly picking individual items. Also includes a library of premade tables.</label>
                        <h4><a href="./tools/tg/terraingenerator.php">Terrain Generator</a></h4>
                        <label>Not really a tool, just a visual terrain generator.</label>
                    </div>
                    <h3>Linked Resources</h3>
                    <h4><a href="http://www.d20pfsrd.com/">D20PFSRD</a></h4>
                    <h4><a href="http://combatmanager.com/">Combat Manager</a></h4>
                    <h4><a href="http://jesterraiin.dropmark.com/165340">More Resources</a></h4>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
