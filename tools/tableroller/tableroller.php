<?php
    // get table from url
    // give it to javascript
    $input = $_GET['t'];
    if (isset($input) && !empty($input))
    {
        // break string into array with each element being a new line
        $input = explode("\n", $input);
        for ($i = 0; $i < count($input); $i++)
        {
            // delete anything that is just white space
            $input[$i] = trim($input[$i]);
            if (empty($input[$i]) || $input[$i] == "")
            {
                unset($input[$i]);
            }
            else
            {
                $input[$i] = htmlspecialchars($input[$i]);
            }
        }
        $input = array_values($input);
    }
    else
    {
        $input = null;
    }
?>
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
        </style>
        <script src="/tools/diceroller/parser.js" async></script>
        <script src="/tools/diceroller/diceParser.js" async></script>
        <script>
            var TABLE = <?php echo (($input != null) ? json_encode($input) : "[]") . ";\n";?>
            window.onload = function(){
                document.getElementById("tableInput").rows = Math.max(TABLE.length, 5);
                document.getElementById("tableInput").value = TABLE.join("\n");

                // create content table
                if (TABLE.length > 0)
                {
                    var mainDiv = document.getElementById("mainDiv");

                    // create results div for rolled results
                    var resultsDiv = document.createElement("div");
                    resultsDiv.className += "block";
                    mainDiv.appendChild(resultsDiv);

                    // create roll results div and button
                    var rollResults = document.createElement("div");
                    var rollbutton = document.createElement("button");
                    rollbutton.appendChild(document.createTextNode("Roll!"));
                    rollbutton.className += "btn btn-default";
                    resultsDiv.appendChild(rollbutton);
                    resultsDiv.appendChild(rollResults);

                    // attach roller function
                    rollbutton.onclick = function(){
                        // roll content
                        var roll = Math.floor(Math.random() * TABLE.length);
                        var content = TABLE[roll];

                        // transform any random dice rolls within the content text into actual results
                        // from diceParser.js
                        content = replaceDiceStringAndEvaluate(content);

                        // show results in the results div
                        rollResults.innerHTML = content + "</br>" + rollResults.innerHTML;
                    };

                    // get div to hold table
                    var tableDiv = document.getElementById("tableBlock");

                    // create table
                    var table = document.createElement("table");
                    table.className = "table-striped table-bordered table";
                    tableDiv.appendChild(table);

                    // create tbody, which is important for bootstrap to work on the table
                    var tbody = document.createElement("tbody");
                    table.appendChild(tbody);

                    // create header row
                    var headers = document.createElement("tr");
                    tbody.appendChild(headers);

                    // create headers
                    var percentileHeader = document.createElement("th");
                    percentileHeader.appendChild(document.createTextNode("d%"));
                    headers.appendChild(percentileHeader);
                    var contentHeader = document.createElement("th");
                    contentHeader.appendChild(document.createTextNode("Content"));
                    headers.appendChild(contentHeader);

                    // create tbody content
                    var increment = 100 / TABLE.length;
                    var curPercent = 0;
                    for (var i = 0; i < TABLE.length; i++)
                    {
                        // create row
                        var row = document.createElement("tr");
                        tbody.appendChild(row);

                        // compute percentages
                        var percent = i;
                        if (TABLE.length <= 100)
                        {
                            percent = Math.floor(curPercent) + 1;
                            percent += '-';
                            curPercent += increment;
                            percent += Math.floor(curPercent);
                        }

                        // create tbody data
                        var percentile = document.createElement("td");
                        percentile.appendChild(document.createTextNode(percent));
                        row.appendChild(percentile);
                        var content = document.createElement("td");
                        content.appendChild(document.createTextNode(TABLE[i]));
                        row.appendChild(content);
                    }
                }
            };
        </script>
    </head>
    <body>
        <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
        ?>
        <div id="mainDiv" class="container">
            <h1>Equilikely Table Roller</h1>
            <a href="links.php">Example Tables</a>
            </br>

            <div id="formBlock" class="block form-group">
                <form method="GET" action="/tools/tableroller/tableroller.php">
                    <label>Insert each possiblity here, one per line.</label>
                    </br>
                    <textarea id="tableInput" class="form-control" name="t"></textarea>
                    </br>
                    <input type="submit" class="btn btn-default" value="Update Table"/>
                </form>
            </div>

            <div id="tableBlock" class="block"></div>
        </div>
    </body>
</html>
