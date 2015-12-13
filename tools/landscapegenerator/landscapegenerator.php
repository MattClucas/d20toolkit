<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Landscape Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS -->
        <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
        <link rel="stylesheet" href="../../css/bootswatch.min.css">
    </head>
    <body>
        <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
        ?>
        <div id="mainDiv" class="container">
            <h1>Landscape Generator</h1>
            <canvas id="theCanvas" width="900" height="600">
                Please use a browser that supports "canvas"
            </canvas>
            <div class="controls">
                <form action="" method="get" id="terrainControls" class="form-group">

                    <label for="seed"><strong>Seed:</strong> 0 for random</label>
                    <br/>
                    <input type="text" class="form-control" id="seed" name="seed" value="0">
                    <br/>

                    <label for="smoothness"><strong>Smoothness:</strong> higher values gives smoother landscapes</label>
                    <br/>
                    <input type="range" name="smoothness" id="smoothness" value="1.8" min="1.0" max="2.5" step=".05"><label id="smoothnessLabel"></label>
                    <br/>

                    <label for="detail_level"><strong>Detail Level:</strong> more detail takes more memory and more time</label>
                    <br/>
                    <input type="range" name="detail_level" id="detail_level" value="8" min="2" max="12"><label id="detailLabel"></label>
                    <br/>

                    <label for="grids_per_side"><strong>Stitched Grids per Side:</strong> more stitched grids takes more memory and more time (however less of a factor than detail level)</label>
                    <br/>
                    <input type="range" name="grids_per_side" id="grids_per_side" value="2" min="0" max="10"><label id="gridsLabel"></label>
                    <br/>

                    <input type="submit" class="btn btn-default" value="Generate">
                </form>
            </div>
            <div>
                <ul>
                    <li>Spacebar -> Pause the sun cycle.</li>
                </ul>
            </div>
        </div>
    </body>
    <!-- Javascript -->
    <script src="javascript/threejs/three.min.js" ></script>
    <script src="javascript/threejs/OrbitControls.min.js"></script>
    <script src="javascript/main.js" ></script>
    <script src="javascript/randomNormal.js" ></script>
    <script src="javascript/terrain.js" ></script>
    <script src="javascript/graphics.js" ></script>
    <script src="javascript/controls.js" ></script>
</html>
