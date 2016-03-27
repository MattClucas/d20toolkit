<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Bestiary Fuzzy Sample</title>
    <link rel="stylesheet" href="bestiaryfuzzy.css">
    <script src="../../js/jquery-2.2.0.min.js"></script>
    <script src="http://listjs.com/no-cdn/list.js"></script>
    <script src="bestiaryPage.js"></script>
    <!-- <script src="/d20toolkit/js/list.fuzzysearch.js"></script> -->
    <script src="/js/list.fuzzysearch.js"></script>
</head>

<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <div class="container">
        <div id="fuzzy-list-container">
            <input type="text" class="fuzzy-search" />
            <div class="scrollbar" style="display:none;">
                <ul class="list">
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
