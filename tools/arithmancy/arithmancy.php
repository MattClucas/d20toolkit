<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Arithmancy Calculator</title>
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div class="container">
        <h1>Arithmancy Calculator</h1>

        <a href="http://www.d20pfsrd.com/feats/general-feats/arithmancy">See the rules.</a>

        <a href="https://youtu.be/3a8LaIME66M?t=24s">Easy mental trick.</a>

        <br>
        <br>Spell Name
        <input type="text" id="spellname" />
        <br>

        <div id="digitalroot">
        </div>

    </div>
</body>
<script src="Arithmancy.js"></script>
<script src="arithmancyPage.js"></script>
</html>
