<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Table Roller Links</title>
    <style>
        .block {
            float: left;
            width: initial;
            margin-left: 5px;
        }

        .blockHolder {
            clear: left;
        }
    </style>
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div class="container">
        <h1>Table Roller Links</h1>

        <!-- Link to specific table sections -->
        <a href="#Encounters">Encounters</a>
        <br>
        <a href="#Magic-Effects">Magic Effects</a>
        <br>
        <a href="#Magic-Items">Magic Items</a>
        <br>
        <a href="#Materials">Materials</a>
        <br>
        <a href="#Miscellaneous">Miscellaneous</a>
        <br>

        <!-- Begin the blocks of tables -->
        <div class="blockHolder">
            <?php include_once('encounters.php'); ?>
        </div>
        <div class="blockHolder">
            <?php include_once('magicEffects.php'); ?>
        </div>
        <div class="blockHolder">
            <?php include_once('magicItems.php'); ?>
        </div>
        <div class="blockHolder">
            <?php include_once('materials.php'); ?>
        </div>
        <div class="blockHolder">
            <?php include_once('miscellaneous.php'); ?>
        </div>
    </div>
</body>
</html>
