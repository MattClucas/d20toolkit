<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Stat Block Generator</title>
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div id="mainDiv" class="container">
        <h1>Stat Block Generator</h1>
        <form id="mainForm" class="col-md-5">
        </form>
        <div id="statBlockOutputDiv" class="col-md-8">
        </div>
    </div>
</body>
<script src="/js/parser.min.js"></script>
<script src="/js/jquery-2.2.0.min.js"></script>
<script src="/js/d20toolkitUtil.js"></script>
<script src="/tools/dr/DiceParser.js"></script>
<script src="data/pfAlignments.js"></script>
<script src="data/pfCreatureSubTypes.js"></script>
<script src="data/pfCreatureTypes.js"></script>
<script src="data/pfDamageReductionTypes.js"></script>
<script src="data/pfEnergyTypes.js"></script>
<script src="data/pfFeats.js"></script>
<script src="data/pfLanguages.js"></script>
<script src="data/pfMovementTypes.js"></script>
<script src="data/pfSenses.js"></script>
<script src="data/pfSizeCategories.js"></script>
<script src="data/pfSkills.js"></script>
<script src="data/pfSpells.js"></script>
<script src="StatBlockGenerator.js"></script>
<script src="main.js"></script>
</html>
