function fuzzyControl()
{
    this.UP_KEY = 38;
    this.DOWN_KEY = 40;
    this.ENTER_KEY = 13;
    this.highlightList; //The current populated list that matches the fuzzy search
    this.highlightedIndex;

    this.getAllMonsterNames();
    this.currentMonster = "Aasimar";    
}

/**
 * Grabs all the monster names from the database, 
 * and calls populateMonsterList when finished.
 */

fuzzyControl.prototype.getAllMonsterNames = function()
{
    var control = this;
    $.ajax({
        type: "GET",
        url: "bestiaryfuzzy/pathfinderdb.php",
        datatype: "json",
        data: {'action': 'getMonsters'},
        success: function(monsters){
            control.populateMonsterList((JSON.parse(monsters)));
        }
    });    
};

/**
 * Looks up the monster's URL in db and opens it.
 */

fuzzyControl.prototype.getMonster = function(monster)
{
    currentMonster = $(monster).text();
    $.ajax({
        type: "GET",
        url: "bestiaryfuzzy/pathfinderdb.php",
        datatype: "json",
        data: {'action': 'getUrl', 'monsterName': currentMonster},
        success: function(url){
            $("#monster-DOM-reference").attr('src',url);
        }
    });
};

fuzzyControl.prototype.addMonster = function()
{
    if (currentMonster !== undefined)
    {
        $.ajax({
            type: "GET",
            url: "bestiaryfuzzy/pathfinderdb.php",
            datatype: "json",
            data: {'action': 'getInitStats', 'monsterName': currentMonster},
            success: function(name){
                monsterInfo = JSON.parse(name)[0];
                combatTrackerInstance.prototype.addMonster(monsterInfo);
                // $("#monster-info").html("Rolled Init:"+ Parser.evaluate(DiceParser.replaceDiceString("1d20"+name["INIT"])) + " Rolled HP:" + Parser.evaluate(DiceParser.replaceDiceString(name["HD"])) + " HD string:"+name["HD"] + "avg hp:" + name["HP"] + " CR:" + name["CR"]);
            }
        });
    }
};

fuzzyControl.prototype.getCurrentMonster = function()
{
    return currentMonster;
};

fuzzyControl.prototype.isFuzzySearch = function()
{
    return true;
};

/**
 * Populates the monster list after being called by getAllMonsterNames()
 * Also handles bindings needed for the populated monster list.
 */

fuzzyControl.prototype.populateMonsterList = function(monsterNameJson)
{
    currentMonster = monsterNameJson[0]["NAME"];
    $.each(monsterNameJson, function(i, val) {
      $(".list").append("<li><p class=\"bestiary-name\" onclick=\"fuzzyControl.prototype.getMonster(this);\">"+val["NAME"]+"</p></li>");
    });

    this.highlightList = $( ".bestiary-name" );

    //need to do plugin and key bindings after list is populated
    var monsterList = new List('fuzzy-list-container', { 
      valueNames: ['bestiary-name'], 
      plugins: [ ListFuzzySearch() ] 
    });

    control = this;

    // Highlight whichever item mouse is over, and unhighlight any other previously highlighted
    $(".bestiary-name").hover(
        function(){
        control.unhighlightCurrent();
        $(this).addClass("beast-highlighted");
        control.highlightedIndex = $(this).parent().index();
        }, function(){
        return;
    });
};

/**
 * Highlights next monster in the populated list.
 */

fuzzyControl.prototype.highlightNext= function()
{
    if (this.highlightList !== undefined)
    {
        var next = this.highlightList[this.highlightedIndex+1];
        if (next !== undefined)
        {
            $(this.highlightList[this.highlightedIndex]).removeClass("beast-highlighted");
            this.highlightedIndex++;
            $(this.highlightList[this.highlightedIndex]).addClass("beast-highlighted");
            $(".scrollbar").scrollTop($(".scrollbar").scrollTop()+$(next).outerHeight()); 
        }
    }
};

/**
 * Highlights previous monster in the populated list.
 */

fuzzyControl.prototype.highlightPrev = function()
{
    if (this.highlightList !== undefined)
    {
        var prev = this.highlightList[this.highlightedIndex-1];
        if (prev !== undefined)
        {
            $(this.highlightList[this.highlightedIndex]).removeClass("beast-highlighted"); 
            this.highlightedIndex--;
            $(this.highlightList[this.highlightedIndex]).addClass("beast-highlighted");
            $(".scrollbar").scrollTop($(".scrollbar").scrollTop()-$(prev).outerHeight());
        }
    }
};

/**
 * Unhighlights currently highlighted monster.
 */

fuzzyControl.prototype.unhighlightCurrent = function()
{
    if (this.highlightList !== undefined)
    {
        var cur = this.highlightList[this.highlightedIndex];
        if (cur !== undefined)
        {
            $(cur).removeClass("beast-highlighted");
        }
    }
};

/**
 * Highlights first monster in the populated list.
 */

fuzzyControl.prototype.highlightFirst = function(e)
{
    key = e.keyCode;
    if ($( ".bestiary-name" ).first() !== undefined && (!( key == this.UP_KEY || key == this.DOWN_KEY)))
    {
        //Delete previously highlighted before list updates
        this.unhighlightCurrent();

        //Highlight new value after list updates
        this.highlightList = $( ".bestiary-name" );
        if (this.highlightList !== undefined)
        {
            var first = this.highlightList[0];
            if (first !== undefined)
            {
                this.highlightedIndex = 0;
                $(this.highlightList[this.highlightedIndex]).addClass("beast-highlighted");
                $(".scrollbar").scrollTop(0);
            }
        }
    }
};

/**
 *
 * opens the reference and hides the list
 */

fuzzyControl.prototype.openReference = function()
{
    if (this.highlightList !== undefined)
    {
        var cur = this.highlightList[this.highlightedIndex];
        if (cur !== undefined)
        {
            $(cur).click();
        }
    }
};

fuzzyControl.prototype.keyupMatch = function(e)
{
    this.highlightFirst(e);
    $(".scrollbar").show();
};

fuzzyControl.prototype.keyupNoMatch = function()
{
    $(".scrollbar").hide();
};

fuzzyControl.prototype.keydown = function(e)
{
    var key = e.keyCode;
    switch(key)
    {
      case this.ENTER_KEY:
          this.openReference();
          break;
      case this.UP_KEY:
          e.preventDefault();
          this.highlightPrev();
          break;
      case this.DOWN_KEY:
          this.highlightNext();
          break;
      default:
          break;
    }
};

