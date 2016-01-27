window.onload = function()
{
    document.getElementById("submitBtn").onclick = function()
    {
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
        input = DiceParser.replaceDiceString(input);

        // try to evaluate the total
        var outcome = input + "<br>";
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
        document.getElementById("output").innerHTML = outcome + "<br>" + document.getElementById("output").innerHTML;

        // clear input box if clearText is checked
        if (document.getElementById("clearText").checked)
        {
            document.getElementById("inputBox").value = "";
        }

        // put the cursor on the input box
        document.getElementById("inputBox").focus();
    };
};
