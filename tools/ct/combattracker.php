<?php $ROOT = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once($ROOT . '/header/common-head-tags.php'); ?>
    <title>Combat Tracker</title>
    <link rel="stylesheet" href="bestiaryfuzzy/bestiaryfuzzy.css">
    <link rel="stylesheet" href="CombatTracker.css">
    <link rel="stylesheet" href="svgStyle.css">
</head>
<body>
    <?php
        include_once($ROOT . '/stats.php');
        include_once($ROOT . '/header/header.php');
    ?>
    <!-- define svgs used later -->
    <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
    <symbol id="icon-heart" viewBox="0 0 16 16">
    <path class="path1" d="M11.8 1c-1.682 0-3.129 1.368-3.799 2.797-0.671-1.429-2.118-2.797-3.8-2.797-2.318 0-4.2 1.882-4.2 4.2 0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.050 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"></path>
    </symbol>
    <symbol id="icon-link" viewBox="0 0 16 16">
    <path class="path1" d="M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z"></path>
    <path class="path2" d="M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z"></path>
    </symbol>
    <symbol id="icon-man" viewBox="0 0 16 16">
    <title>man</title>
    <path class="path1" d="M9 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
    <path class="path2" d="M9 4h-3c-0.552 0-1 0.448-1 1v5h1v6h1.25v-6h0.5v6h1.25v-6h1v-5c0-0.552-0.448-1-1-1z"></path>
    </symbol>
    <symbol id="icon-new-tab" viewBox="0 0 16 16">
    <title>new-tab</title>
    <path class="path1" d="M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z"></path>
    <path class="path2" d="M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z"></path>
    </symbol>
    </defs>
    </svg>

    <div id="mainDiv" class="container">
        <h1>Combat Tracker</h1>
        <div id="addUserDiv" class="col-md-4">
            <input type="text" id="userNameInput" class="form-control" onkeydown="if(event.keyCode==13)document.getElementById('addUserButton').click()" placeholder='Name. Ex: "Richmond"'>
            <br>
            <input type="text" id="initiativeInput" class="form-control" onkeydown="if(event.keyCode==13)document.getElementById('addUserButton').click()" placeholder='Initative. Ex: "d20 + 5" or "17"'>
            <br>
            <input type="text" id="hpInput" class="form-control" onkeydown="if(event.keyCode==13)document.getElementById('addUserButton').click()" placeholder='HP (optional). Ex: "d20 + 5" or "17"'>
            <br>
            <button id="addUserButton" class="btn btn-block btn-default">Add User</button>
            <a href="#openModal" id="addMonstersButton" class="btn btn-block btn-default">Add Monsters</a>
            <button id="startCombatButton" class="btn btn-block btn-default">Start Combat</button>
            <label>Current Round:</label><label id="roundLabel">0</label>
        </div>
        <div id="trackerDiv" class="col-md-8">
        </div>
    </div>
    <div id="openModal" class="modalDialog">
        <div>
            <a href="#close" title="Close" class="close">X</a>
            <div id="monster-filter">
                <div id="fuzzy-list-container">
                    <input type="text" class="fuzzy-search" placeholder='Monster Name. Ex: "Shedu"' />
                    <select disabled>
                        <option>1/6</option>
                        <option>1/4</option>
                        <option>1/2</option>
                        <option>1</option>
                    </select>
                    <select disabled>
                        <option>30</option>
                        <option>1/4</option>
                        <option>1/2</option>
                        <option>1</option>
                    </select>
                    <input type="checkbox" id="rollHp" value="checkbox" checked> <label for="cbox2">Roll Monster HP</label>
                    <div class="scrollbar">
                        <ul class="list">
                        </ul>
                    </div>
                </div>
            </div>
                <iframe src="http://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/shedu" id="monster-DOM-reference" class="calculated-width"style="width: -webkit-calc(100% - 300px); min-height:85%; float:right;">
                </iframe>
                <button id="addMonsterButton" class="btn btn-block btn-primary" style="width: -webkit-calc(100% - 300px);float:right;">Add Monster</button>
         </div>

     </div>

</body>
<script src="/js/parser.min.js"></script>
<script src="/js/jquery-2.2.0.min.js"></script>
<script src="/js/d20toolkitUtil.js"></script>
<script src="/tools/dr/DiceParser.js"></script>
<script src="CombatTracker.js"></script>
<script src="main.js"></script>
<script src="/js/list.min.js"></script>
<script src="bestiaryfuzzy/bestiaryPage.js"></script>
<script src="bestiaryfuzzy/list.fuzzysearchCustom.js"></script>
</html>
