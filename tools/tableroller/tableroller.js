window.onload = function()
{
    var tableInputDOM = document.getElementById("tableInput");

    // compress the form data before submission
    document.getElementById("tableUpdateForm").onsubmit = function()
    {
        var content = tableInputDOM.value;
        // compress table content
        var compressed = LZString.compressToEncodedURIComponent(content);
        tableInputDOM.value = compressed;
    };

    // parse the url parameters
    var urlParams; // url params will be inside this object
    (window.onpopstate = function()
    {
        var match,
            pl = /\+/g, // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function(s)
            {
                return decodeURIComponent(s.replace(pl, " "));
            },
            query = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
        {
            urlParams[decode(match[1])] = decode(match[2]);
        }
    })();

    // create the TABLE array of items
    var TABLE = [];
    if (urlParams.t)
    {
        // decompress table content
        urlParams.t = LZString.decompressFromEncodedURIComponent(urlParams.t);
        TABLE = urlParams.t.split("\n"); // every new line is a seperate item
    }
    for (var i = 0; i < TABLE.length; i++)
    {
        TABLE[i] = TABLE[i].trim(); // remove all unnecessary whitespace
        if (TABLE[i] == null || TABLE[i] == "")
        {
            TABLE.splice(i, 1); // delete the item if it contains nothing
            i--; // go back one index because now the array has shifted by one
        }
        else
        {
            TABLE[i] = {
                txt: TABLE[i]
            };
        }
    }

    // fill text area with input for table
    var tableInputStr = "";
    for (var i = 0; i < TABLE.length; i++)
    {
        var delimiter = (i < TABLE.length - 1) ? "\n" : "";
        tableInputStr += TABLE[i].txt + delimiter;
    }
    tableInputDOM.value = tableInputStr;

    // create resizing functions
    (function()
    {
        var observe;
        if (window.attachEvent)
        {
            observe = function(element, event, handler)
            {
                element.attachEvent('on' + event, handler);
            };
        }
        else
        {
            observe = function(element, event, handler)
            {
                element.addEventListener(event, handler, false);
            };
        }

        function resize()
        {
            tableInputDOM.style.height = 'auto';
            tableInputDOM.style.height = tableInputDOM.scrollHeight + 'px';
        }
        /* 0-timeout to get the already changed text */
        function delayedResize()
        {
            window.setTimeout(resize, 0);
        }
        observe(tableInputDOM, 'change', resize);
        observe(tableInputDOM, 'cut', delayedResize);
        observe(tableInputDOM, 'paste', delayedResize);
        observe(tableInputDOM, 'drop', delayedResize);
        observe(tableInputDOM, 'keydown', delayedResize);

        tableInputDOM.focus();
        resize();
    })();

    // create content table
    if (TABLE.length > 0)
    {
        var mainDiv = document.getElementById("mainDiv");
        var removeOptionsCheckbox = document.getElementById("removeOptionsCheckbox");

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

        // create a set of remaining options to choose from
        var remaining = [];
        for (var i = 0; i < TABLE.length; i++)
        {
            remaining[i] = i;
        }

        // attach roller function
        rollbutton.onclick = function()
        {
            // this happens when all items have been removed from the table
            if (remaining.length <= 0)
            {
                return;
            }

            // roll content
            var remainingSelectionIndex = Math.floor(Math.random() * remaining.length);
            var roll = remaining[remainingSelectionIndex];
            var content = TABLE[roll].txt;

            // transform any random dice rolls within the content text into actual results
            // from DiceParser.js
            content = DiceParser.replaceDiceStringAndEvaluate(content);

            // show results in the results div
            rollResults.innerHTML = content + "<br>" + rollResults.innerHTML;

            if (removeOptionsCheckbox.checked)
            {
                // put a line through the table row's text and remove it from the options
                TABLE[roll].row.className += " lineThrough";
                remaining.splice(remainingSelectionIndex, 1);
            }
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
            TABLE[i].row = row;
            tbody.appendChild(row);

            // compute percentages
            var percent = i + 1;
            if (TABLE.length < 100)
            {
                var firstNum = Math.floor(curPercent) + 1;
                curPercent += increment;

                // ensure that the last percentage ends with 100
                var secondNum;
                if ((i == TABLE.length - 1) && Math.floor(curPercent) != 100)
                {
                    secondNum = 100;
                }
                else
                {
                    secondNum = Math.floor(curPercent);
                }

                percent = firstNum;
                // only show the second number if they are not the same
                if (firstNum != secondNum)
                {
                    percent += '-' + secondNum;
                }
            }

            // create tbody data
            var percentile = document.createElement("td");
            percentile.appendChild(document.createTextNode(percent));
            row.appendChild(percentile);
            var content = document.createElement("td");
            content.appendChild(document.createTextNode(TABLE[i].txt));
            row.appendChild(content);
        }
    }
};
