var camera;

/* --Format Data--
    create a geometry object from vertex height grid
*/
function prepareData(grid) {

    var gridSize = grid.length;

    /* create a geometry object to hold all vertices */
    var geometry = new THREE.Geometry();

    /* track the number of verices to easily create faces */
    var numVertices = 0;
    var before = Date.now();

    var index = 0;
    /* add vertices and faces for each square in the grid */
    for (var x = 0, xplus = 1; x < gridSize - 1; x = xplus, xplus++) {
        for (var z = 0, zplus = 1; z < gridSize - 1; z = zplus, zplus++) {
            // vertices
            var topRight = null;
            var topLeft  = null;
            var botRight = null;
            var botLeft  = null;

            // colors
            var topRightColor = null;
            var topLeftColor  = null;
            var botRightColor = null;
            var botLeftColor  = null;

            /*
             * Values are stored as chunks into the array like so:
             * [TopRight, BotRight, BotLeft, TopLeft, TopRight, BotLeft]
             *
             * To get already created vertices we can use this to our advantage.
             */
            if (z > 0) {
                // reuse what was just put in the array
                var botLeftInd = index - 3; // lower square's top left
                var botRightInd = index - 2; // lower square's top right
                botLeft       = geometry.vertices[botLeftInd];
                botLeftColor  = geometry.colors[botLeftInd];
                botRight      = geometry.vertices[botRightInd];
                botRightColor = geometry.colors[botRightInd];
            }
            if (x > 0) {
                // reuse what was put into the array one full gridSize back
                var topLeftInd = index - (6 * (gridSize - 1)); // left square's top right
                var botLeftInd = topLeftInd + 1; // left square's bottom right
                botLeft      = botLeft      || geometry.vertices[botLeftInd];
                botLeftColor = botLeftColor || geometry.colors[botLeftInd];
                topLeft      = geometry.vertices[topLeftInd];
                topLeftColor = geometry.colors[topLeftInd];
            }

            // get heights
            var topRightHeight = grid[xplus][zplus];
            var topLeftHeight  = grid[x    ][zplus];
            var botRightHeight = grid[xplus][z    ];
            var botLeftHeight  = grid[x    ][z    ];

            // these values always must be created each iteration
            topRight      = new THREE.Vector3(xplus, topRightHeight, zplus);
            topRightColor = getColor(topRightHeight);

            // these values must be created if they weren't before, use short circuit style
            topLeft      = topLeft      || new THREE.Vector3(x, topLeftHeight, zplus);
            topLeftColor = topLeftColor || getColor(topLeftHeight);

            botRight      = botRight      || new THREE.Vector3(xplus, botRightHeight, z);
            botRightColor = botRightColor || getColor(botRightHeight);

            botLeft      = botLeft      || new THREE.Vector3(x, botLeftHeight, z);
            botLeftColor = botLeftColor || getColor(botLeftHeight);

            /* add vertices for the lower-right triangle */
            geometry.vertices[index] = topRight;
            geometry.colors[index++] = topRightColor;

            geometry.vertices[index] = botRight;
            geometry.colors[index++] = botRightColor;

            geometry.vertices[index] = botLeft;
            geometry.colors[index++] = botLeftColor;

            /* add vertices for the upper-left triangle [pretty sure we need CCW coordinate order] */
            geometry.vertices[index] = topLeft;
            geometry.colors[index++] = topLeftColor;

            geometry.vertices[index] = topRight;
            geometry.colors[index++] = topRightColor;

            geometry.vertices[index] = botLeft;
            geometry.colors[index++] = botLeftColor;

            /* push face for lower-right triangle */
            var face1 = new THREE.Face3(numVertices, numVertices + 1, numVertices + 2);
            face1.vertexColors.push(topRightColor);
            face1.vertexColors.push(botRightColor);
            face1.vertexColors.push(botLeftColor);
            geometry.faces.push(face1);

            /* push face for upper-left triangle */
            var face2 = new THREE.Face3(numVertices + 3, numVertices + 4, numVertices + 5);
            face2.vertexColors.push(topLeftColor);
            face2.vertexColors.push(topRightColor);
            face2.vertexColors.push(botLeftColor);
            geometry.faces.push(face2);

            /* update the number of vertices that we have added once faces have been created */
            numVertices += 6;
        }
    }

    var after = Date.now();
    console.log("Time to create vertices:" + (after - before));

    /* remove duplicate vertices and update faces.  Better performance? */
    before = Date.now();
    // geometry.mergeVertices(geometry);
    after = Date.now();
    console.log("Time to merge vertices:" + (after - before));

    /* compute face normals so we can do lighting */
    before = Date.now();
    geometry.computeFaceNormals();
    after = Date.now();
    console.log("Time to compute face normals:" + (after - before));

    return geometry;
}

/* COLORS */

// only have one copy of each color for speed and memory optimization
var WATER_COLOR = new THREE.Color(0x129793); // water color
var SAND_COLOR = new THREE.Color(0xc2b280);  // sand color
var GRASS_COLOR = new THREE.Color(0x007B0C); // grass color
var STONE_COLOR = new THREE.Color(0x444250); // stone color
var WATER_COLORS; // array of water colors

/**
 * Given a depth value (0 to -70, will be truncated if it is out of this range),
 * this function returns the appropriate water THREE.Color object corresponding
 * to this depth.
 */
function getWaterColor(depth) {
    // if Water colors array isn't created yet, then create it
    if (!WATER_COLORS) {
        WATER_COLORS = [];
        var HSL = WATER_COLOR.getHSL();
        for (var i = 0; i < 20; i++) {
            var color = new THREE.Color()
            color.copy(WATER_COLOR);
            color.offsetHSL(0, 0, -i * HSL.l * 0.1); //decrease the lightness by 10% per step
            WATER_COLORS[WATER_COLORS.length] = color;
        }
    }
    // calculate an index to use for the Water_Colors array [70 is max depth considered for color change] 19 number of colors in array
    var index = Math.floor((Math.min(-depth, 70) / 70) * 19);
    return WATER_COLORS[index];
}

/**
 * Gets a THREE.Color object for this height value.
 * Height can be -70 to 70 and will be truncated if
 * it exceeds these values.
 */
function getColor(height) {
    // randomly scale height by a factor normally distributed about 1 to allow for variation
    var rand = Math.abs(randomNormal(1, .25)) * height;

    // return a color to use
    if (rand < 0) {
        return getWaterColor(height);
    } else if (rand < 10) {
        return SAND_COLOR;
    } else if (rand < 70) {
        return GRASS_COLOR;
    }
    return STONE_COLOR;
}

/* --Render-- */
// global boolean for whether or not the sun should be rotating in the scene.
var pauseSun = false;

/**
 * Given the geometry object for the terrain and the length of a side of the terrain,
 * this creates the scene and renders it.
 */
function createScene(geometry, size) {
    /* create the scene object */
    var scene = new THREE.Scene();

    /* create a camera looking at origin */
    camera = new THREE.PerspectiveCamera(45, 1.5, 0.1, 1000);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 1;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    /* create a renderer for the canvas */
    var ourCanvas = document.getElementById('theCanvas');
    var renderer = new THREE.WebGLRenderer({
        canvas: ourCanvas
    });

    /* create a mesh from geometry object scale the grid to 1x1 and center it in scene */
    var material = new THREE.MeshPhongMaterial({
        vertexColors: THREE.VertexColors,
        wireframe: false,
        specular: 0x888888,
        shininess: 1
    });
    var terrain = new THREE.Mesh(geometry, material);
    var scale = 1 / size;
    terrain.scale.set(scale, scale, scale);
    terrain.position.set(-0.5, 0, -0.5);

    // Create Water Plane
    geometry = new THREE.PlaneGeometry(1, 1);
    geometry.translate(0, 0, 0);
    geometry.rotateX(Math.PI / 2);
    material = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.4,
        color: 0x0077be,
        side: THREE.DoubleSide
    });
    var water = new THREE.Mesh(geometry, material);

    /* create lights */
    // The "sun"  This is just a random light add more take this one out, It doesn't matter
    var sun = new THREE.DirectionalLight(0x888888, 1.5);
    sun.position.set(-0.4, 1, -0.2);

    var ambient = new THREE.AmbientLight(0x323232);

    /* add everything to the scene*/
    scene.add(ambient);
    scene.add(sun);
    scene.add(terrain);
    scene.add(water);

    var x = 0;

    var render = function() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);

        /* rotate about the y axis, never going below the horizon */
        //sun.position.set(Math.sin(x), Math.abs(Math.sin(x)), Math.cos(x));

        /* Rotate the sun to simulate night and day */
        var yPos = Math.sin(x);
        sun.position.set(0, yPos, Math.cos(x));

        // rotate make night go much faster than day
        if (!pauseSun) {
            x += (yPos > -0.1) ? 0.015 : 0.1;
        }
    };

    render();
}
