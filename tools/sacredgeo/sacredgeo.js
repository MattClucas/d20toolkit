function isValidNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 49 || charCode > 56)) {
        return false;
    }
    return true;
}

var MAX_ITERATIONS = 1000000;
var OPERATORS = ['+', '-', '*', '/'];
var PRIME_CONSTANTS = [
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

var MAX_SPELL_LEVEL = 9;
var MIN_SPELL_LEVEL = 1;

// populate select form
var spellLevelSelect = document.getElementById('spellLevelSelect');
for (var i = MIN_SPELL_LEVEL; i <= MAX_SPELL_LEVEL; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    spellLevelSelect.appendChild(opt);
}

// attach keypress handler to rolledNumbers text box
var rolledNumbers = document.getElementById('rolledNumbers');
rolledNumbers.onkeypress = function (event) {
    return isValidNumber(event);
};

document.getElementById('calculateButton').addEventListener("click", function () {
    var invalidInputMsg = "Please enter at least 2 numbers from 1 through 8.";
    var resultsDiv = document.getElementById('result');
    var spellLevel = spellLevelSelect.options[spellLevelSelect.selectedIndex].value;

    // validate rolls
    var rollsText = rolledNumbers.value;
    if (rollsText.length < 2) {
        resultsDiv.innerHTML = invalidInputMsg;
        return;
    }
    var rolls = [];
    for (var i = 0; i < rollsText.length; i++) {
        var roll = parseInt(rollsText.charAt(i));
        // check for invalid number
        if (!isValidNumber(roll)) {
            resultsDiv.innerHTML = invalidInputMsg;
            return;
        }
        rolls.push(roll);
    }

    // do the calculation and display the results
    var result = calculate(spellLevel, rolls);
    if (result) {
        var diceIndex = 0;
        var operationsIndex = 0;
        var display = "" + result.dice[0] + result.operations[0] + result.dice[1];
        for (var i = 1; i < result.operations.length; i++) {
            // wrap with parenthesis to show correct ordering
            display = "(" + display + ") " + result.operations[i] + result.dice[i + 1];
        }
        display += " = " + result.result + " in " + result.loops + " guesses.";
        resultsDiv.innerHTML = display;
    } else {
        var primes = PRIME_CONSTANTS[spellLevel - 1];
        resultsDiv.innerHTML = "Sorry, no result found. You need " + primes[0] + ", " + primes[1] + ", or " + primes[2] + ".";
    }
});

function calculate(spellLevel, rolls) {
    function isPrime(total) {
        var primes = PRIME_CONSTANTS[spellLevel - 1];
        for (var i = 0; i < primes.length; i++) {
            if (total == primes[i]) {
                return true;
            }
        }
        return false;
    }

    function shuffle(array) {
        var counter = array.length;
        var temp;
        var index;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    var total = 0;
    var operators;
    for (var iteration = 0; iteration < MAX_ITERATIONS && !isPrime(total); iteration++) {
        var operators = [];
        rolls = shuffle(rolls);
        total = rolls[0];
        for (var i = 1; i < rolls.length; i++) {
            var operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
            var currentDie = rolls[i];
            switch (operator) {
                case '+':
                    total += currentDie;
                    break;
                case '-':
                    // avoid negatives or 0s by not doing subtraction when it is not positive
                    if (total > currentDie) {
                        total -= currentDie;
                    } else {
                        total *= currentDie;
                        operator = '*';
                    }
                    break;
                case '*':
                    total *= currentDie;
                    break;
                case '/':
                    // avoid negatives or 0s by not doing division when it is not positive
                    if (total % currentDie == 0) {
                        total /= currentDie;
                    } else {
                        total += currentDie;
                        operator = '+';
                    }
                    break;
            }
            operators.push(operator);
        }
    }

    // either return an object with the solution or null
    if (isPrime(total)) {
        return {
            result: total,
            dice: rolls,
            operations: operators,
            loops: iteration
        };
    }
    return null;
}