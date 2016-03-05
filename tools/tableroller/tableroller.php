<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Table Roller</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="../../css/bootswatch.min.css">
    <style>
        .block {
            padding: 10px;
            float: left;
        }

        .lineThrough {
            text-decoration: line-through;
        }
    </style>
</head>

<body>
    <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
        ?>
        <div id="mainDiv" class="container">
            <h1>Equilikely Table Roller</h1>
            <a href="links.php">Library of Tables</a>
            <br>

            <div id="formBlock" class="block form-group">
                <form id="tableUpdateForm" method="GET" action="/tools/tableroller/tableroller.php">
                    <label>Insert each possiblity here, one per line.</label>
                    <br>
                    <textarea id="tableInput" class="form-control" cols="30" name="t"></textarea>
                    <label>Copy URL to save or share table.</label>
                    <br>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="removeOptionsCheckbox">Remove options when rolled?</label>
                    </div>
                    <input type="submit" class="btn btn-default" value="Update Table" />
                </form>
            </div>

            <div id="tableBlock" class="block"></div>
        </div>
</body>
<script src="/js/lz-string.min.js"></script>
<script src="/js/parser.min.js"></script>
<script src="/tools/diceroller/DiceParser.js"></script>
<script src="/tools/tableroller/tableroller.js"></script>

</html>
