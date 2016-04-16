/**
 * The SacredGeometry object is a calculator for the pathfinder Sacred Geometry
 * feat.
 */
SacredGeometry = {};
SacredGeometry.MAX_SPELL_LEVEL = 9;
SacredGeometry.MIN_SPELL_LEVEL = 1;
SacredGeometry.MAX_ITERATIONS = 1000000;
SacredGeometry.OPERATORS = ['+', '-', '*', '/'];
SacredGeometry.PRIME_CONSTANTS = [
    [3, 5, 7],
    [11, 13, 17],
    [19, 23, 29],
    [31, 37, 41],
    [43, 47, 53],
    [59, 61, 67],
    [71, 73, 79],
    [83, 89, 97],
    [101, 103, 107]
];

SacredGeometry.isValidSpellLevel = function(spellLevel)
{
    var num = parseInt(spellLevel);
    return !isNaN(num) && num >= SacredGeometry.MIN_SPELL_LEVEL && num <= SacredGeometry.MAX_SPELL_LEVEL;
};

/**
 * Returns whether or not roll is a valid dice roll for the sacred
 * geometry feat. It has to be a number between 1 and 8 inclusive.
 */
SacredGeometry.isValidRoll = function(roll)
{
    var num = parseInt(roll);
    return !isNaN(num) && num >= 1 && num <= 8;
};

/**
 * Determines whether or not the total is a valid prime for the
 * given spell level for the sacred geometry feat.
 */
SacredGeometry.isPrime = function(total, spellLevel)
{
    return SacredGeometry.PRIME_CONSTANTS[spellLevel - 1].indexOf(total) !== -1;
};

/**
 * General purpose array shuffling function.
 */
SacredGeometry.shuffle = function(array)
{
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0)
    {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};

SacredGeometry.calculate = function(spellLevel, rolls)
{
    var total = 0;
    for (var iteration = 0; iteration < SacredGeometry.MAX_ITERATIONS && !SacredGeometry.isPrime(total, spellLevel); iteration++)
    {
        var operators = [];
        rolls = SacredGeometry.shuffle(rolls);
        total = rolls[0];
        for (var i = 1; i < rolls.length; i++)
        {
            var operator = SacredGeometry.OPERATORS[Math.floor(Math.random() * SacredGeometry.OPERATORS.length)];
            var currentDie = rolls[i];
            switch (operator)
            {
                case '+':
                    total += currentDie;
                    break;
                case '-':
                    // avoid negatives or 0s by not doing subtraction when it is not positive
                    if (total > currentDie)
                    {
                        total -= currentDie;
                    }
                    else
                    {
                        total *= currentDie;
                        operator = '*';
                    }
                    break;
                case '*':
                    total *= currentDie;
                    break;
                case '/':
                    // avoid negatives or 0s by not doing division when it is not positive
                    if (total % currentDie == 0)
                    {
                        total /= currentDie;
                    }
                    else
                    {
                        total += currentDie;
                        operator = '+';
                    }
                    break;
            }
            operators.push(operator);
        }
    }

    // either return an object with the solution or null
    if (SacredGeometry.isPrime(total, spellLevel))
    {
        return {
            result: total,
            dice: rolls,
            operations: operators,
            loops: iteration
        };
    }
    return null;
};

/**
 * Given a spell level, a string representing the dice rolls, and a boolean
 * for if the number of guesses should be shown, this function does the
 * Sacred Geometry calculation and returns a result string.
 */
SacredGeometry.wizard = function(spellLevel, dice, showGuesses)
{
    // validate spell level and rolls exist
    if (!(spellLevel && dice))
    {
        return "Spell level or dice are invalid.";
    }

    // validate spell level
    if (!SacredGeometry.isValidSpellLevel(spellLevel))
    {
        return spellLevel + " is not a valid spell level. Please choose a spell level between " +
            SacredGeometry.MIN_SPELL_LEVEL + " and " + SacredGeometry.MAX_SPELL_LEVEL + ".";
    }

    // validate there are enough dice
    if (dice.length < 2)
    {
        return "Please enter at least 2 numbers from 1 through 8.";
    }

    // transform dice string into an array of numbers
    var rolls = [];
    for (var i = 0; i < dice.length; i++)
    {
        var roll = dice.charAt(i);
        if (!SacredGeometry.isValidRoll(roll))
        {
            return roll + " is not a valid dice roll.";
        }
        rolls.push(parseInt(roll));
    }


    // do the calculation and display the results
    var result = SacredGeometry.calculate(spellLevel, rolls);
    if (result)
    {
        var diceIndex = 0;
        var operationsIndex = 0;
        var display = "" + result.dice[0] + result.operations[0] + result.dice[1];
        for (var i = 1; i < result.operations.length; i++)
        {
            // wrap with parenthesis to show correct ordering
            display = "(" + display + ") " + result.operations[i] + result.dice[i + 1];
        }
        display += " = " + result.result;

        if (showGuesses)
        {
            display += " in " + result.loops + " guesses.";
        }
        return display;
    }

    var primes = SacredGeometry.PRIME_CONSTANTS[spellLevel - 1];
    return "Sorry, no result found. You need " + primes[0] + ", " + primes[1] + ", or " + primes[2] + ".";
};