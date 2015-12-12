var SEED = 0;

// submit form and reload controls {method = get}
document.getElementById("terrainControls").submit = function(){
    this.submit();
    location.reload();
};

/* get parameters for terrain from url */
function getUrlParams() {
    // parse the url parameters
    var urlParams; // url params will be inside this object
    (window.onpopstate = function() {
        var match,
            pl = /\+/g, // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function(s) {
                return decodeURIComponent(s.replace(pl, " "));
            },
            query = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
    })();
    return urlParams;
}

/* enter here on page reload */
function main() {
    var mainBefore = Date.now();
    window.onkeypress = handleKeyPress;

    // put all values from url into the form on html
    var urlParams = getUrlParams();
    if (urlParams.seed) {
        document.getElementById("seed").value = urlParams.seed;
    }
    if (urlParams.smoothness) {
        document.getElementById("smoothness").value = urlParams.smoothness;
    }
    if (urlParams.detail_level) {
        document.getElementById("detail_level").value = urlParams.detail_level;
    }
    if (urlParams.grids_per_side) {
        document.getElementById("grids_per_side").value = urlParams.grids_per_side;
    }

    /* Get values from form*/
    RNG_INSTANCE = new Rng(document.getElementById("seed").value);

    /* smoothness constant */
    H = document.getElementById("smoothness").value;
    document.getElementById("smoothnessLabel").innerHTML = document.getElementById("smoothness").value;
    /* level of detail 9 reasonably well*/
    var detail = document.getElementById("detail_level").value;
    document.getElementById("detailLabel").innerHTML = document.getElementById("detail_level").value;
    /* number of grids stitched together (side length) */
    var numGridsSquared = document.getElementById("grids_per_side").value;
    document.getElementById("gridsLabel").innerHTML = document.getElementById("grids_per_side").value;

    // create labels that display the value of the sliders
    function setOnChangeDisplay(inputId, labelId) {
        document.getElementById(inputId).onchange = function(){
            document.getElementById(labelId).innerHTML = this.value;
        };
    }
    setOnChangeDisplay("smoothness", "smoothnessLabel");
    setOnChangeDisplay("detail_level", "detailLabel");
    setOnChangeDisplay("grids_per_side", "gridsLabel");


    var before = Date.now();
    var masterGrid;
    var gridSize = calcGridSize(detail);

    // if no grids are to be stitched together then use a preGrid from user input
    // TODO: user input for pregrid from google sheets
    if (numGridsSquared == 0) {
        var preGrid = [
            [randomNormal(10, gridSize / 4), randomNormal(10, gridSize / 4)],
            [randomNormal(10, gridSize / 4), randomNormal(10, gridSize / 4)]
        ];
        masterGrid = createGrid(detail, gridSize, null, preGrid);

    } else {

        // create many grids to make the landscape more interesting
        var grids = [];
        for (var i = 0; i < numGridsSquared; i++) {
            grids[i] = [];
            for (var j = 0; j < numGridsSquared; j++) {
                // create neighbors, only south and west will exist due to the
                // order these are being created.
                var neighbors = {
                    south: (j - 1 >= 0) ? grids[i][j - 1] : null, // the condition is to not go out of bounds on the array
                    west: (i - 1 >= 0) ? grids[i - 1][j] : null // the condition is to not go out of bounds on the array
                };
                grids[i][j] = createGrid(detail, gridSize, neighbors, null);
            }
        }

        // put all the grids together into the master grid
        masterGrid = [];
        for (var i = 0; i < numGridsSquared; i++) {
            for (var j = 0; j < gridSize; j++) {
                // each grid's edges are equal to their neighbors so skip it
                if (j == gridSize - 1 && i != numGridsSquared - 1) {
                    continue;
                }

                var mgIndex = masterGrid.length;
                masterGrid[mgIndex] = grids[i][0][j].slice(0, -1);
                for (var k = 1; k < numGridsSquared; k++) {
                    // dont add the last bit of each strip because the borders of each edge are the same
                    var stripToAdd = (k != numGridsSquared - 1) ? grids[i][k][j].slice(0, -1) : grids[i][k][j];
                    masterGrid[mgIndex] = masterGrid[mgIndex].concat(stripToAdd);
                }
            }
        }
    }

    var after = Date.now();
    console.log("Time to create Master Grid:" + (after - before));

    // prepare data for use by Three.js
    before = Date.now();
    var geometry = prepareData(masterGrid);
    after = Date.now();
    console.log("Time to prepare geometry:" + (after - before));

    // render!
    before = Date.now();
    createScene(geometry, masterGrid.length);
    after = Date.now();
    console.log("Time to render:" + (after - before));

    var mainAfter = Date.now();
    console.log("Time to run main:" + (mainAfter - mainBefore));
}
window.onload = main;
