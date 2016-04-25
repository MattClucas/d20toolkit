function Combatant(id)
{
    this.id = id;
    this.usedFullRound = false;
    this.usedStandard = false;
    this.usedMoves = 0;
    this.usedSwift = false;
    this.usedImmediate = false;
    this.usedFiveFootStep = false;
    this.isCurrentTurn = false;
    this.numAOOUsed = 0;
    this.tookTurn = false;
}
Combatant.prototype.MAX_MOVES_PER_ROUND = 2;
Combatant.prototype.MAX_AOO_PER_ROUND = 1;

/**
 * Sets the initiative for this Combatant.
 */
Combatant.prototype.setInitiative = function(initiative)
{
    var init = parseInt(initiative);
    if (isNaN(init))
    {
        throw "Initiative is not a number.";
    }
    this.initiative = init;
};

/**
 * Sets the url for this Combatant.
 */
Combatant.prototype.setUrl = function(url)
{
    this.url = url;
};

/**
 * Ends this Combatant's turn.
 */
Combatant.prototype.endTurn = function()
{
    this.isCurrentTurn = false;
    this.tookTurn = true;
};

/**
 * Begins this Combatant's turn.
 */
Combatant.prototype.beginTurn = function()
{
    this.tookTurn = false;
    this.isCurrentTurn = true;
    this.usedFullRound = false;
    this.usedStandard = false;
    this.usedMoves = 0;
    this.usedFiveFootStep = false;
    this.numAOOUsed = 0;

    // if the immediate action was used out of turn, usedImmediate will be true and
    // we should remove the ability to use a swift for this round
    this.usedSwift = this.usedImmediate;
    this.usedImmediate = false;
};

/**
 * Check if the Combatant is able to perform an Attack of Opportunity Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseAttackOfOpportunity = function()
{
    return this.numAOOUsed < this.MAX_AOO_PER_ROUND;
};

/**
 * Attempt to use an Attack of Opportunity action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptAttackOfOpportunity = function()
{
    if (!this.canUseAttackOfOpportunity())
    {
        return false;
    }
    this.numAOOUsed++;
    return true;
};

/**
 * Check if the Combatant is able to perform a FullRound Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseFullRound = function()
{
    return (this.isCurrentTurn && !this.usedStandard && !this.usedFullRound && this.usedMoves <= 0);
};

/**
 * Attempt to use a FullRound action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptFullRound = function()
{
    if (!this.canUseFullRound())
    {
        return false;
    }
    this.usedFullRound = true;
    return true;
};

/**
 * Check if the Combatant is able to perform a Standard Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseStandard = function()
{
    return (this.isCurrentTurn && !this.usedFullRound && !this.usedStandard && this.usedMoves < this.MAX_MOVES_PER_ROUND);
};

/**
 * Attempt to use a Standard action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptStandard = function()
{
    if (!this.canUseStandard())
    {
        return false;
    }
    this.usedStandard = true;
    return true;
};

/**
 * Check if the Combatant is able to perform a Five foot step Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseFiveFootStep = function()
{
    return (this.isCurrentTurn && this.usedMoves <= 0 && !this.usedFiveFootStep);
};

/**
 * Attempt to use a five-foot-step action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptFiveFootStep = function()
{
    if (!this.canUseFiveFootStep())
    {
        return false;
    }
    this.usedFiveFootStep = true;
    return true;
};

/**
 * Check if the Combatant is able to perform a Move Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseMove = function()
{
    return this.canUseNonRepositioningMove() && !this.usedFiveFootStep;
};

/**
 * Check if the Combatant is able to perform a Move action that doesn't reposition them
 * like drawing or sheathing a weapon, manipulating an item, mounting a steed, etc ...
 *
 * This does not count actually moving a distance.
 */
Combatant.prototype.canUseNonRepositioningMove = function()
{
    if (!this.isCurrentTurn || this.usedFullRound)
    {
        return false;
    }
    var effectiveUsedMoves = this.usedMoves;
    if (this.usedStandard)
    {
        effectiveUsedMoves++;
    }
    if (effectiveUsedMoves >= this.MAX_MOVES_PER_ROUND)
    {
        return false;
    }
    return true;
};

/**
 * Attempt to use a move action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptMove = function()
{
    if (!this.canUseMove())
    {
        return false;
    }
    this.usedMoves++;
    return true;
};

/**
 * Attempting to use a move action that does not move the Combatant a distance.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptNonRepositioningMove = function()
{
    if (!this.canUseNonRepositioningMove())
    {
        return false;
    }
    this.usedMoves++;
    return true;
};

/**
 * Check if the Combatant is able to perform a Swift Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseSwift = function()
{
    return (this.isCurrentTurn && !this.usedSwift && !this.usedImmediate);
};

/**
 * Attempt to use a swift action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptSwift = function()
{
    if (!this.canUseSwift())
    {
        return false;
    }
    this.usedSwift = true;
    return true;
};

/**
 * Check if the Combatant is able to perform an Immediate Action based on other actions taken.
 * Returns true if this action can be taken, otherwise returns false.
 */
Combatant.prototype.canUseImmediate = function()
{
    /*
     * You can use an immediate action if and only if these conditions are met:
     * It is your turn and you have not used your swift action.
     *     This is because on your turn your immediate action counts as your
     *     swift action and you can only ever have one swift action per turn.
     * It is not your turn and you have not used your immediate action.
     *     This is because outside of your turn your immediate action will
     *     take up your next turns swift action, the immediate action variable
     *     is used to mark the next turn's swift action as used later.
     * http://www.d20pfsrd.com/gamemastering/combat#TOC-Immediate-Actions
     */
    if (this.isCurrentTurn)
    {
        return !this.usedSwift;
    }
    return !this.usedImmediate;
};

/**
 * Attempt to use an immediate action for this Combatant.
 * Returns true if the action was used, returns false otherwise.
 */
Combatant.prototype.attemptImmediate = function()
{
    if (!this.canUseImmediate())
    {
        return false;
    }
    if (this.isCurrentTurn)
    {
        this.usedSwift = true;
    }
    else
    {
        this.usedImmediate = true;
    }
    return true;
};

/**
 * When used in a sorting function this method sorts Combatants as Min initiative first.
 */
Combatant.compare = function(c1, c2)
{
    // c1 must be valid and if c2 is given it must be valid
    if (!c1 || isNaN(c1.initiative) || !c2 || isNaN(c2.initiative))
    {
        throw "Combatant is not valid.";
    }

    // regular style comparison used for generic sorting methods
    if (c1.initiative < c2.initiative)
    {
        return -1;
    }
    if (c1.initiative > c2.initiative)
    {
        return 1;
    }
    return 0;
};

/**
 * When used in a sorting function this method sorts Combatants as Max initiative first.
 */
Combatant.compareReverse = function(c1, c2)
{
    return -1 * Combatant.compare(c1, c2);
};

/**
 * The CombatTracker keeps the turn order and provides convient methods to progress through Combatant's turns.
 * Combatants may be added, removed, or accessed and combat is progressed by calling nextTurn().
 */
function CombatTracker()
{
    // hashmap of id->Combatants
    this.combatantsMap = {};
    // list of combatants who were in combat at the beginning of this round.
    // Combatants who are added during the round will be added into combat once the round is over
    this.yetToGoInCurrentRound = [];
    this.waitingForNextRound = [];
    this.round = 0;
    this.currentTurnInRound = 0;
}

/**
 * Returns the total number of combatants being tracked.
 */
CombatTracker.prototype.getNumCombatants = function()
{
    return this.yetToGoInCurrentRound.length + this.waitingForNextRound.length;
};

/**
 * Returns the combatant who is currently taking their turn.
 */
CombatTracker.prototype.getCurrentCombatant = function()
{
    if (this.yetToGoInCurrentRound.length > 0)
    {
        return this.yetToGoInCurrentRound[0];
    }
    return null;
};
/**
 * Internal use only. Adds a combatant to the waiting list.
 */
CombatTracker.prototype._addCombatantToWaitingList = function(combatant)
{
    this.waitingForNextRound.push(combatant);
    this.waitingForNextRound.sort(Combatant.compareReverse);
};

/**
 * Moves combat ahead to the next Combatant's turn.
 * This method automatically ends the previous combatant's turn and begins the next combatant's turn.
 * Returns the next combatant whose turn is beginning.
 */
CombatTracker.prototype.nextTurn = function()
{
    if (this.getNumCombatants() <= 0)
    {
        console.log("No combatants in combat.");
        return null;
    }

    // check for ending combatant's turn
    // this will only not happen at the beginning of the first round
    if (this.yetToGoInCurrentRound.length > 0)
    {
        var combatantWhoseTurnIsEnding = this.yetToGoInCurrentRound.shift();
        combatantWhoseTurnIsEnding.endTurn();
        this._addCombatantToWaitingList(combatantWhoseTurnIsEnding);
    }

    // check to reset round
    if (this.yetToGoInCurrentRound.length <= 0)
    {
        // copy the list of all combatants into the combat round list
        // already sorted
        this.yetToGoInCurrentRound = this.waitingForNextRound;
        this.waitingForNextRound = [];
        this.round++;
    }

    // return the new combatant to take their turn
    var next = this.yetToGoInCurrentRound[0];
    next.beginTurn();
    return next;
};

/**
 * Adds a new combatant to the CombatTracker with the given id, initiative, and url.
 * They will join combat on the next round.
 */
CombatTracker.prototype.addCombatant = function(id, initiative, url)
{
    // validate inputs
    if (typeof id !== 'string' && !(id instanceof String))
    {
        throw "id is not a string and therefore not valid.";
    }
    if (this.combatantsMap[id])
    {
        throw "Combatant already exists.";
    }

    // create the new combatant
    var combatant = new Combatant(id);
    combatant.setInitiative(initiative);
    combatant.setUrl(url);

    // add combatant to the map and array
    this.combatantsMap[id] = combatant;
    this._addCombatantToWaitingList(combatant);
    return combatant;
};

/**
 * Returns an index number onto existing named combatants so that more than one 
 * with the same name may be added.
 */
CombatTracker.prototype.getIndexedId = function(id)
{
    var i = 2;
    baseId = id;
    while (this.combatantsMap[id])
    {
        id = baseId + " " + i;
        i++;
    }
    return id;
};

/**
 * Returns the Combatant with the given id if they are exist.
 */
CombatTracker.prototype.getCombatant = function(id)
{
    // validate inputs
    if (typeof id !== 'string' && !(id instanceof String))
    {
        throw "id is not a string and therefore not valid.";
    }

    return this.combatantsMap[id];
};

/**
 * Removes the combatant with the given id from combat if they exist.
 */
CombatTracker.prototype.removeCombatant = function(id)
{
    // validate inputs
    if (typeof id !== 'string' && !(id instanceof String))
    {
        throw "id is not a string and therefore not valid.";
    }

    // remove combatant from mapping and turn order
    delete this.combatantsMap[id];
    for (var i = 0; i < this.yetToGoInCurrentRound.length; i++)
    {
        if (this.yetToGoInCurrentRound[i].id == id)
        {
            this.yetToGoInCurrentRound.splice(i, 1);
            if (i == 0)
            {
                this.nextTurn();
            }
            return;
        }
    }
    for (var i = 0; i < this.waitingForNextRound.length; i++)
    {
        if (this.waitingForNextRound[i].id == id)
        {
            this.waitingForNextRound.splice(i, 1);
            return;
        }
    }
};

/**
 * Returns an array of combatants sorted by the order in which the combatants will go.
 */
CombatTracker.prototype.getTurnOrder = function()
{
    return this.yetToGoInCurrentRound.concat(this.waitingForNextRound);
};