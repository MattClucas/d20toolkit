function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}

// print heights to console [useless for large grids]
function gridToConsole(grid) {
    var str = "";
    var gridSize = grid.length;

    for (var i = 0; i < gridSize; i++) {
        for (var k = 0; k < gridSize; k++) {
            str += Math.round(grid[i][k]) + "\t";
        }

        str = "";
    }
}

/* Average grid heights and add a randomly distributed normal centered at 0 */
function variedAverage(grid, variation_scale, values) {
    var sum = 0.0;

    for (var i = 0; i < values.length; i++) {
        sum += grid[values[i].x][values[i].y];
    }

    var random = randomNormal(0, .33);
    var avg = sum / values.length;

    /* create scaling factor height_scale to make high peaks more rough and beaches and the ocean more smooth
       basically more height = more rough
       height_level is between 0 and 1      */
    var height_level = (avg + grid.length / 2) / grid.length;

    var height_scale;
    if (height_level > .8) {
        height_scale = 1;
    } else {
        /* 
         * scaling equation: https://docs.google.com/a/iastate.edu/spreadsheets/d/1Ra9ffuAv2Db9lx1uYCne1lHRfD4ETJUAm6id9wkY7jI/edit?usp=sharing
         * height_scale = 3.366*height_level^3 - 1.952*height_level^2 + 0.353*height_level + 0.248 
         */
        height_scale = (((3.366 * height_level) - 1.952) * height_level + 0.353) * height_level + 0.248;
    }
    return avg + (random * variation_scale * height_scale);
}

/* Recursively generate height values for 2D terrain array

    Grid side length must be of the sequence 2, 3, 5, 9, 17, 33, 65 ...
    otherwise the recursion will fail at some point
    A(n+1) =  [2 * A(n)] - 1

-----------------------------------------------------------------------------------------
    O = 4 known corner points
    0 = 4 new edge points and one new center point to assign

    half_length         [ start.x , (start.y + sideLength) ]
        |                 |
        v                 v
    
        -    -            O     0     O   <-- [ (start.x + sideLength) , (start.y + sideLength) ]
        |    |
        -    |            0     0     0
             |
             -            O     0     O   <-- [ (start.x + sideLength) , start.y ]

             ^            ^
             |            |
     side_length      [ start.x, start.y ] <-- bottom_left
-----------------------------------------------------------------------------------------
 The depth first algorithm created a lot of sharp edges:   
 prevent sharp edges by defining heights bredth first */
function BFHeights(start, grid_length, scale, grid, steps) {
    var half_length = side_length / 2;

    for (var i = 0; i < steps; i++) {
        scale *= Math.pow(0.5, H / 2);
        var side_lengths_at_level = Math.pow(2, i);
        var side_length = grid_length / side_lengths_at_level;
        half_length = side_length / 2;

        for (var k = 0; k < side_lengths_at_level; k++) {
            for (var j = 0; j < side_lengths_at_level; j++) {
                // get the 4 points bounding this chunk
                var bottom_left  = new Coordinate(start.x + (side_length * k), start.y + (side_length * j));
                var top_left     = new Coordinate(bottom_left.x              , bottom_left.y + side_length);
                var top_right    = new Coordinate(bottom_left.x + side_length, bottom_left.y + side_length);
                var bottom_right = new Coordinate(bottom_left.x + side_length, bottom_left.y              );

                // get the center points of all the sides of this chunk and the exact center point itself
                var left_edge   = new Coordinate(bottom_left.x              , bottom_left.y + half_length);
                var right_edge  = new Coordinate(bottom_left.x + side_length, bottom_left.y + half_length);
                var bottom_edge = new Coordinate(bottom_left.x + half_length, bottom_left.y              );
                var top_edge    = new Coordinate(bottom_left.x + half_length, bottom_left.y + side_length);
                var center      = new Coordinate(bottom_left.x + half_length, bottom_left.y + half_length);

                // Assign values to all side centers and the actual center
                // Do not assign values if a value already exists, which happens when this is a border with a neighbor grid
                grid[left_edge.x  ][left_edge.y  ] = grid[left_edge.x  ][left_edge.y  ] || variedAverage(grid, scale, [bottom_left , top_left    ]);
                grid[right_edge.x ][right_edge.y ] = grid[right_edge.x ][right_edge.y ] || variedAverage(grid, scale, [bottom_right, top_right   ]);
                grid[top_edge.x   ][top_edge.y   ] = grid[top_edge.x   ][top_edge.y   ] || variedAverage(grid, scale, [top_left    , top_right   ]);
                grid[bottom_edge.x][bottom_edge.y] = grid[bottom_edge.x][bottom_edge.y] || variedAverage(grid, scale, [bottom_left , bottom_right]);
                grid[center.x     ][center.y     ] = grid[center.x     ][center.y     ] || variedAverage(grid, scale, [bottom_left , top_left    , top_right, bottom_right]);
            }
        }
    }
}

/* gridSize = 2 * prevGridSize - 1 requires a loop calculating every grid size
   gridSize = 2^(i+1) - (2^i - 1) is equivalent but does not require loop      */
function calcGridSize(steps) {
    var base = Math.pow(2, steps);
    return 2 * base - (base - 1);
}

/* create a 2D array with a given side length on both sides */
function createDoubleArr(gridSize) {
    var grid = new Array(gridSize);

    for (var i = 0; i < gridSize; i++) {
        grid[i] = new Array(gridSize)
    }
    return grid;
}

/* There are two ways to create a new grid, 
   (1) by passing a neighbors object which can have north, east, south, and west neighbors properties.
        each neighbor will be accounted for so that the edge of this grid matches the bordering edge of that grid.
   (2) by passing in a preGrid that defines the grid up to a certain step level
        this grid is of the sequence explained above 2x2, 3x3, 5x5, 9x9 ... etc.  */
function createGrid(steps, gridSize, neighbors, preGrid) {
    var start = new Coordinate(0, 0);
    var grid = createDoubleArr(gridSize);

    if (!preGrid) {
        /* enter here if there was a preGrid defined */
        if (neighbors) {
            // if the east neighbor exists, make the east border match the neighbor's west
            if (neighbors.east) {
                grid[gridSize - 1] = neighbors.east[0];
            }

            // if the west neighbor exists, make the west border match the neighbor's east
            if (neighbors.west) {
                grid[0] = neighbors.west[gridSize - 1];
            }

            // if the north neighbor exists, make the north border match the neighbor's south
            if (neighbors.north) {
                for (var i = 0; i < gridSize; i++) {
                    grid[i][gridSize - 1] = neighbors.north[i][0];
                }
            }

            // if the south neighbor exists, make the south border match the neighbor's north
            if (neighbors.south) {
                for (var i = 0; i < gridSize; i++) {
                    grid[i][0] = neighbors.south[i][gridSize - 1];
                }
            }
        }

        // set the corners that are still not set yet
        // Assign inital corner values if they don't already exist. Should be randomly generated
        grid[0           ][0           ] = grid[0           ][0           ] || randomNormal(10, gridSize / 4);
        grid[0           ][gridSize - 1] = grid[0           ][gridSize - 1] || randomNormal(10, gridSize / 4);
        grid[gridSize - 1][0           ] = grid[gridSize - 1][0           ] || randomNormal(10, gridSize / 4);
        grid[gridSize - 1][gridSize - 1] = grid[gridSize - 1][gridSize - 1] || randomNormal(10, gridSize / 4);

    } else {
        /* enter here if there was a preGrid defined */
        var scale = (gridSize - 1) / (preGrid.length - 1);
        for (var i = 0; i < preGrid.length; i++) {
            for (var j = 0; j < preGrid.length; j++) {
                grid[Math.floor(i * scale)][Math.floor(j * scale)] = preGrid[i][j];
            }
        }
    }

    // generate heights and track the time it takes
    var before = Date.now();
    BFHeights(start, (gridSize - 1), gridSize / 2, grid, steps);
    var after = Date.now();
    console.log("Time to generate heights:" + (after - before));

    return grid;
}
