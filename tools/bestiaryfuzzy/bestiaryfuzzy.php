<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Bestiary Fuzzy Sample</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="../../css/bootswatch.min.css">
    <link rel="stylesheet" href="bestiaryfuzzy.css">
    <script src="../../js/jquery-2.2.0.min.js"></script>
    <script src="http://listjs.com/no-cdn/list.js"></script>
    <script src="/js/list.fuzzysearch.js"></script>
    <meta charset=utf-8 />
</head>

<body>
    <?php
        include_once('../../stats.php');
        include_once('../../header/header.php');
    ?>
        <div class="container">
            <div id="test-list">
                <input type="text" id="myList" class="fuzzy-search" />
                <div class="scrollbar" style="display:none;">
                    <ul class="list">
                    </ul>
                </div>
          </div>
      </div>
</body>
<script src="bestiaryPage.js"></script>
</html>