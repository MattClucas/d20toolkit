function getAllMonsterNames()
{
    $.ajax({
        type: "GET",
        url: "pathfinderdb.php",
        datatype: "json",
        data: {'action': 'getMonsters'},
        success: function(monsters){
            populateMonsterList((JSON.parse(monsters)));
            //window.open(url, '','width=screen.height, height=screen.width');      
        }
    });    
}

function populateMonsterList(monsterNameJson)
{
    $.each(monsterNameJson, function(i, val) {
      $(".list").append("<li><p class=\"name\" onclick=\"getMonster(this);\">"+val["NAME"]+"</p></li>");
    });

    //need to do plugin and key bindings after list is populated
    var monsterList = new List('test-list', { 
      valueNames: ['name'], 
      plugins: [ ListFuzzySearch() ] 
    });

    $('input').keydown(function(e)
    {        
        var key = e.keyCode;
        switch(key)
        {
            case ENTER_KEY:
                openReference();
                break;
            case UP_KEY:
                e.preventDefault();
                highlightPrev();
                break;
            case DOWN_KEY:
                highlightNext();
                break;
            default:
                break;
        }
    });

    $('input').keyup(function(e)
    {
        var inputBox = document.getElementById('myList');
        displayMonsters(inputBox.value, e);     
    });

    $('html').click(function(e){
        if(e.target.id !== 'myList')
        { 
            resetInput();
        }
    });

    // Highlight whichever item mouse is over, and unhighlight any other previously highlighted
    $(".name").hover(
        function(){
        unhighlightCurrent();
        $(this).css("background-color", HIGHLIGHTED_RBG);
        highlightedIndex = $(this).parent().index();
        }, function(){
        return;
    });
}

function getMonster(monster)
{
    $.ajax({
        type: "GET",
        url: "pathfinderdb.php",
        datatype: "html",
        data: {'action': 'getUrl', 'monsterName': $(monster).text()},
        success: function(url){
            window.open(url);      
        }
    });
}

var UNHIGHLIGHTED_RBG = "#383838";
var HIGHLIGHTED_RBG = "#575757";
var UP_KEY = 38;
var DOWN_KEY = 40;
var ENTER_KEY = 13;

getAllMonsterNames();

function displayMonsters(rawString, e)
{
    if (rawString.charAt(0) == '@')
    {
        if ($( ".name" ).first() !== undefined)
        {
            highlightMonster(e); 
        }
        $(".scrollbar").show();
    }
    else
    {
        $(".scrollbar").hide();
    }
}

var highlightList;
var highlightedIndex;
var keyDownTime;
var released = false;

function highlightNext()
{
    if (highlightList !== undefined)
    {
        var next = highlightList[highlightedIndex+1];
        if (next !== undefined)
        {
            $(highlightList[highlightedIndex]).css("background-color", UNHIGHLIGHTED_RBG);
            highlightedIndex++;
            $(highlightList[highlightedIndex]).css( "background-color", HIGHLIGHTED_RBG );
            $(".scrollbar").scrollTop($(".scrollbar").scrollTop()+$(next).outerHeight()); 
        }
    }
}

function highlightPrev()
{
    if (highlightList !== undefined)
    {
        var prev = highlightList[highlightedIndex-1];
        if (prev !== undefined)
        {
            $(highlightList[highlightedIndex]).css("background-color", UNHIGHLIGHTED_RBG); 
            highlightedIndex--;
            $(highlightList[highlightedIndex]).css( "background-color", HIGHLIGHTED_RBG );
            $(".scrollbar").scrollTop($(".scrollbar").scrollTop()-$(prev).outerHeight());
        }
    }
}

function unhighlightCurrent()
{
    if (highlightList !== undefined)
    {
        var cur = highlightList[highlightedIndex];
        if (cur !== undefined)
        {
            $(cur).css("background-color", UNHIGHLIGHTED_RBG);
        }
    }
}

function highlightFirst()
{
    //Delete previously highlighted before list updates
    unhighlightCurrent();

    //Highlight new value after list updates
    highlightList = $( ".name" );
    if (highlightList !== undefined)
    {
        var first = highlightList[0];
        if (first !== undefined)
        {
            highlightedIndex = 0;
            $(highlightList[highlightedIndex]).css( "background-color", HIGHLIGHTED_RBG );
            $(".scrollbar").scrollTop(0);
        }
    }
}

function highlightMonster(e)
{
    key = e.keyCode;

    if (!( key == UP_KEY || key == DOWN_KEY)) 
    {      
        highlightFirst();
    }
}

//opens the reference and hides the list
function openReference()
{
    if (highlightList !== undefined)
    {
        var cur = highlightList[highlightedIndex];
        if (cur !== undefined)
        {
            $(cur).click();
            resetInput();
        }
    }
}

function resetInput()
{
    $(".scrollbar").hide();
    $("#myList").val("");
}


