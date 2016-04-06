window.onload = function()
{
    var combatTracker = new CombatTracker();
    var combatantDOMs = {};

    var MAX_CHARACTERS = 50;
    var $userNameInput = $('#userNameInput');
    var $initiativeInput = $('#initiativeInput');
    var $trackerDiv = $('#trackerDiv');
    var $roundLabel = $('#roundLabel');
    var $startCombatButton = $('#startCombatButton');

    var combatStarted = false;
    $startCombatButton[0].onclick = function()
    {
        if (combatStarted)
        {
            return;
        }

        if (combatTracker.getNumCombatants() <= 0)
        {
            alert("Please add some combatants before starting combat.");
            return;
        }

        nextTurnFunc();
        combatStarted = true;
        $(this).hide();
    };

    $('#addUserButton')[0].onclick = function()
    {
        // validate the name
        var name = $userNameInput.val().trim();
        if (!name || name.length > MAX_CHARACTERS)
        {
            alert("Please enter a name between 1 and 50 characters.");
            return;
        }

        // validate the initiative
        var initiative = $initiativeInput.val().trim();
        if (!initiative)
        {
            alert("Please enter an initiative.");
            return;
        }

        // parse the initiative
        try
        {
            initiative = DiceParser.replaceDiceString(initiative);
            initiative = Parser.evaluate(initiative);
            initiative = parseInt(initiative);
        }
        catch (err)
        {
            alert("A problem occured when interpretting the initiative, try again.");
            return
        }
        if (isNaN(initiative))
        {
            alert("Please enter a valid initiative. It can be a dice roll, mathematical expression, or a combination of both.");
            return;
        }

        // try to create the combatant
        var combatant;
        try
        {
            combatant = combatTracker.addCombatant(name, initiative);
        }
        catch (error)
        {
            alert(error.toString());
            return;
        }

        var combatantDom = new CombatantDOM(name, combatant);
        combatantDom.initialize();
        combatantDOMs[name] = combatantDom;

        // success! combatant added, now update the view
        reorderView();
    };

    function nextTurnFunc()
    {
        var currentCombatant = combatTracker.getCurrentCombatant();
        if (currentCombatant)
        {
            var id = currentCombatant.id;
            combatantDOMs[id].$dropdownPanel.hide();
        }
        currentCombatant = combatTracker.nextTurn();
        if (currentCombatant)
        {
            var id = currentCombatant.id;
            combatantDOMs[id].$dropdownPanel.show();
        }
        reorderView();
    }

    function removeFunc(name)
    {
        // check if we are removing the current combatant and show
        // the next combatant's drop down if we are
        var currentCombatant = combatTracker.getCurrentCombatant();
        var removingCurrent = (currentCombatant && currentCombatant.id == name);

        // remove the combatant
        combatTracker.removeCombatant(name);
        delete combatantDOMs[name];
        reorderView();

        // display the new combatant's drop down if necessary
        if (removingCurrent)
        {
            currentCombatant = combatTracker.getCurrentCombatant();
            if (currentCombatant)
            {
                combatantDOMs[currentCombatant.id].$dropdownPanel.show();
            }
        }
    }

    function reorderView()
    {
        // get the array of combatants in their turn order
        var combatants = combatTracker.getTurnOrder();
        $trackerDiv.empty();
        if (combatants.length <= 0)
        {
            combatStarted = false;
            $startCombatButton.show();
        }

        for (var i = 0; i < combatants.length; i++)
        {
            var combatantName = combatants[i].id;
            var combatantDom = combatantDOMs[combatantName];
            combatantDom.update();
            $trackerDiv.append(combatantDom.$rootDOM);
        }
        $roundLabel.text(combatTracker.round);
    }

    function CombatantDOM(name, combatant)
    {
        if (!combatant || !(combatant instanceof Combatant))
        {
            throw "combatant must be an instance of the Combatant class.";
        }

        this.combatant = combatant;
        this.displayInit = combatant.initiative;
        this.displayName = name;

        // create a reference to this object to use in subfunctions
        var self = this;

        var fullWidth = 12;
        var halfWidth = fullWidth / 2;
        // creat the root panel that all other DOM elements will be inside
        this.$rootDOM = createDOMGridRow(fullWidth);
        this.$rootDOM.css(
        {
            "margin-bottom": "3px",
            "border-color": D20_UTIL.getRandomColor(),
            "border-width": "2px",
            "border-style": "solid"
        });

        // create header row which displays the name and the initiative
        this.$headerRow = createDOMGridRow(fullWidth);
        this.$headerRow.addClass("h3");
        this.$nameBox = createDOMGridRow(10);
        this.$nameBox.text(this.displayName);
        this.$headerRow.append(this.$nameBox);
        this.$initBox = createDOMGridRow(2);
        this.$initBox.text(this.displayInit);
        this.$initBox.addClass("text-right");
        this.$headerRow.append(this.$initBox);
        this.$rootDOM.append(this.$headerRow);

        // create the dropdown panel
        this.$dropdownPanel = createDOMGridRow(fullWidth);
        this.$rootDOM.append(this.$dropdownPanel);
        // start the drop down panel as hidden
        // when the headerrow is clicked, the dropdown panel will toggle
        this.$dropdownPanel.hide();
        this.$headerRow.css('cursor', 'pointer');
        // using regular javascript because for some reason .click(function(){...}); was overwriting
        // all previous click event handlers. Go ahead, try and fix it!
        this.$headerRow[0].onclick = function()
        {
            self.$dropdownPanel.toggle();
        };

        // create top row to contain full round action button
        this.$dropdownPanelTopRow = createDOMGridRow(fullWidth);
        this.$fullRoundBtn = createDOMBlockButton("Full Round");
        this.$dropdownPanelTopRow.append(this.$fullRoundBtn);
        this.$dropdownPanel.append(this.$dropdownPanelTopRow);

        // create next row with Move and Standard action buttons
        this.$dropdownPanelMoveStandardRow = createDOMGridRow(fullWidth);
        this.$moveDiv = createDOMGridRow(halfWidth);
        this.$moveBtn = createDOMBlockButton("Move");
        this.$nonRepositioningMoveBtn = createDOMBlockButton("Move (non-repositioning)");
        this.$nonRepositioningMoveBtn.hide(); // start hidden
        this.$nonRepositioningMoveBtn.css("margin-top", "0px");
        this.$moveDiv.append(this.$moveBtn);
        this.$moveDiv.append(this.$nonRepositioningMoveBtn);
        this.$dropdownPanelMoveStandardRow.append(this.$moveDiv);
        this.$dropdownPanelMoveStandardRow.append(this.$moveDiv);
        this.$standardDiv = createDOMGridRow(halfWidth);
        this.$standardBtn = createDOMBlockButton("Standard");
        this.$standardDiv.append(this.$standardBtn);
        this.$dropdownPanelMoveStandardRow.append(this.$standardDiv);
        this.$dropdownPanel.append(this.$dropdownPanelMoveStandardRow);

        // create next row with 5ft, immediate, and swift
        this.$dropdownPanelThirdRow = createDOMGridRow(fullWidth);
        this.$fiveFootDiv = createDOMGridRow(3);
        this.$fiveFootBtn = createDOMBlockButton("5ft Step");
        this.$fiveFootDiv.append(this.$fiveFootBtn);
        this.$dropdownPanelThirdRow.append(this.$fiveFootDiv);
        this.$aooDiv = createDOMGridRow(3);
        this.$aooBtn = createDOMBlockButton("AoO");
        this.$aooDiv.append(this.$aooBtn);
        this.$dropdownPanelThirdRow.append(this.$aooDiv);
        this.$immediateDiv = createDOMGridRow(3);
        this.$immediateBtn = createDOMBlockButton("Immediate");
        this.$immediateDiv.append(this.$immediateBtn);
        this.$dropdownPanelThirdRow.append(this.$immediateDiv);
        this.$swiftDiv = createDOMGridRow(3);
        this.$swiftBtn = createDOMBlockButton("Swift");
        this.$swiftDiv.append(this.$swiftBtn);
        this.$dropdownPanelThirdRow.append(this.$swiftDiv);
        this.$dropdownPanel.append(this.$dropdownPanelThirdRow);

        // create 4th row with end turn and remove combatant buttons
        this.$dropdownPanelFourthRow = createDOMGridRow(fullWidth);
        this.$endTurnDiv = createDOMGridRow(halfWidth);
        this.$endTurnBtn = createDOMBlockButton("End Turn");
        this.$endTurnDiv.append(this.$endTurnBtn);
        this.$dropdownPanelFourthRow.append(this.$endTurnDiv);
        this.$removeDiv = createDOMGridRow(halfWidth);
        this.$removeBtn = createDOMBlockButton("Remove Combatant");
        this.$removeDiv.append(this.$removeBtn);
        this.$dropdownPanelFourthRow.append(this.$removeDiv);
        this.$dropdownPanel.append(this.$dropdownPanelFourthRow);
    }
    CombatantDOM.prototype.update = function()
    {
        // enable or disable all the buttons based on the combatant's state
        this.$nameBox.text(this.displayName);
        this.$initBox.text(this.combatant.initiative);
        this.$fullRoundBtn.prop('disabled', !this.combatant.canUseFullRound());
        if (!this.combatant.canUseMove() && this.combatant.canUseNonRepositioningMove())
        {
            this.$moveBtn.hide();
            this.$nonRepositioningMoveBtn.show();
        }
        else
        {
            this.$moveBtn.show();
            this.$nonRepositioningMoveBtn.hide();
        }
        this.$moveBtn.prop('disabled', !this.combatant.canUseMove());
        this.$nonRepositioningMoveBtn.prop('disabled', !this.combatant.canUseNonRepositioningMove());
        this.$standardBtn.prop('disabled', !this.combatant.canUseStandard());
        this.$fiveFootBtn.prop('disabled', !this.combatant.canUseFiveFootStep());
        this.$swiftBtn.prop('disabled', !this.combatant.canUseSwift());
        this.$immediateBtn.prop('disabled', !this.combatant.canUseImmediate());
        this.$aooBtn.prop('disabled', !this.combatant.canUseAttackOfOpportunity());
        this.$endTurnBtn.prop('disabled', !this.combatant.isCurrentTurn);
    };
    CombatantDOM.prototype.initialize = function()
    {
        var self = this;
        setActionClickHandler(this, this.$fullRoundBtn, 'attemptFullRound', "Full Round Action");
        setActionClickHandler(this, this.$moveBtn, 'attemptMove', "Move Action");
        setActionClickHandler(this, this.$nonRepositioningMoveBtn, 'attemptNonRepositioningMove', "Nonrepositioning Move Action");
        setActionClickHandler(this, this.$standardBtn, 'attemptStandard', "Standard Action");
        setActionClickHandler(this, this.$fiveFootBtn, 'attemptFiveFootStep', "Five Foot Step");
        setActionClickHandler(this, this.$swiftBtn, 'attemptSwift', "Swift Action");
        setActionClickHandler(this, this.$immediateBtn, 'attemptImmediate', "Immediate Action");
        setActionClickHandler(this, this.$aooBtn, 'attemptAttackOfOpportunity', "Attack Of Opportunity");

        this.$endTurnBtn[0].onclick = nextTurnFunc;
        this.$removeBtn[0].onclick = function()
        {
            removeFunc(self.displayName);
        };
        this.update();
    };

    function setActionClickHandler(combatantDom, $btn, attemptFuncName, actionText)
    {
        $btn[0].onclick = function()
        {
            if (combatantDom.combatant[attemptFuncName]())
            {
                console.log(actionText + " was performed by " + combatantDom.displayName);
                combatantDom.update();
            }
            else
            {
                console.log(combatantDom.displayName + " was unable to perform " + actionText);
            }
        };
    }

    function createDOMGridRow(width)
    {
        var $dom = $("<div>");
        $dom.addClass("col-md-" + width);
        $dom.addClass("col-xs-" + width);
        return $dom;
    }

    function createDOMBlockButton(text)
    {
        var $btn = $('<button>');
        $btn.addClass("btn btn-default btn-block");
        $btn.html(text);
        $btn.css(
        {
            "margin-bottom": "3px"
        });
        return $btn;
    }
};