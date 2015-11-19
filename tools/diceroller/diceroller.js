/**
 * Rolls numDice number of dice each with numSides number
 * of sides and returns the results in an array.
 */
function rollDice(numSides, numDice)
{
    var dice = [];
    for (var i=0; i<numDice; i++)
    {
        var roll = Math.floor(Math.random() * numSides) + 1;
        dice.push(roll);
    }
    return dice;
}

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
function diceParse(match) {
    // get an array of the first number and last
    match = match.toLowerCase().trim().split("d");
    if (match[0] == "")
    {
        match[0] = 1;
    }
    return "(" + rollDice(match[1], match[0]).join("+") + ")";
}

window.onload = function(){
    document.getElementById("submitBtn").onclick = function(){
        // grab the user input
        var input = document.getElementById("inputBox").value;

        // don't do anything if the user has not entered anything
        if (!input)
        {
            return;
        }

        // everywhere there is the pattern [number1]d<number2> (optional first number, "d" or "D", required second number)
        // replace it with rolled dice where the format is number1 = number of dice, defaults to 1; number2 = number of
        // sides on the dice
        input = input.replace(/\d*d\d+/ig, diceParse);

        // try to evaluate the total
        var outcome = input + "</br>";
        try
        {
            // uses parser.js to evaluate any total
            var total = Parser.evaluate(input);
            outcome += "= " + total;
        }
        catch (error)
        {
            outcome += error.toString();
        }

        // prepend the new string to the existing output and get the total
        document.getElementById("output").innerHTML = outcome + "</br>" + document.getElementById("output").innerHTML;

        // clear input box if clearText is checked
        if (document.getElementById("clearText").checked)
        {
            document.getElementById("inputBox").value = "";
        }

        // put the cursor on the input box
        document.getElementById("inputBox").focus();
    };
};
