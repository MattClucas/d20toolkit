DiceParser = {};

/**
 * Rolls numDice number of dice each with numSides number
 * of sides and returns the results in an array.
 */
DiceParser.rollDice = function(numSides, numDice)
{
    var dice = [];
    for (var i = 0; i < numDice; i++)
    {
        var roll = Math.floor(Math.random() * numSides) + 1;
        dice.push(roll);
    }
    return dice;
};

/*
 * Takes the matched string - match - and returns the corresponding rollDice() output
 * and inserts it into a string which can be evaluated by parser.js.
 *
 * Matched text should be of the format "[#1]<d|D><#2>" where
 *     [#1] is a number representing the number of dice to roll - optional (defaults to 1)
 *     <d|D> is the character "d" or "D" - required
 *     <#2> is the number of sides for this dice - required
 *
 * Returns a string of the format "(#+#+#...)" where each of the #'s are the rolled result.
 *
 * Example:
 *     match  : "5d6"
 *     return : "(3+4+5+2+6)"
 */
DiceParser.diceParse = function(match)
{
    // get an array of the first number and last
    match = match.toLowerCase().trim().split("d");
    if (match[0] == "")
    {
        match[0] = 1;
    }
    return "(" + DiceParser.rollDice(match[1], match[0]).join("+") + ")";
};

DiceParser.diceParseAndEvaluate = function(match)
{
    var diceParseResult = DiceParser.diceParse(match);
    var sum = Parser.evaluate(diceParseResult);
    return "(" + sum + ")";
};

DiceParser.replaceDiceStringAndEvaluate = function(str)
{
    return str.replace(/\d*d\d+/ig, DiceParser.diceParseAndEvaluate);
};

/**
 * Searches the given string and replaces every instance of a dice format with rolled results.
 *
 * Returns the new string.
 */
DiceParser.replaceDiceString = function(str)
{
    return str.replace(/\d*d\d+/ig, DiceParser.diceParse);
};