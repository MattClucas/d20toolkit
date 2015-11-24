<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Sacred Geometry Calculator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="../../css/bootswatch.min.css">
  </head>
  <body>
    <?php 
	include_once('../../stats.php');
	include_once('../../header/header.php'); 
	?>
    <div class="container">
		<h1>Arithmancy Calculator</h1>

		<a href="http://www.d20pfsrd.com/feats/general-feats/arithmancy">See the rules.</a>

		<a href="https://youtu.be/3a8LaIME66M?t=24s">Easy mental trick.</a>

		<br/>
		<br/>Spell Name
		<input type="text" id="spellname" />
		<br/>
		
		<div id="digitalroot">
		</div>

    </div>
  </body>
  <script src="arithmancy.js"></script>
</html>
