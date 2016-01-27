window.onload = function()
{
    function isValidNumber(evt)
    {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 49 || charCode > 56))
        {
            return false;
        }
        return true;
    }

    // populate select form
    var spellLevelSelect = document.getElementById('spellLevelSelect');
    for (var i = SacredGeometry.MIN_SPELL_LEVEL; i <= SacredGeometry.MAX_SPELL_LEVEL; i++)
    {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        spellLevelSelect.appendChild(opt);
    }

    // attach keypress handler to rolledNumbers text box
    var rolledNumbers = document.getElementById('rolledNumbers');
    rolledNumbers.onkeypress = function(event)
    {
        return isValidNumber(event);
    };

    var resultsDiv = document.getElementById('result');
    document.getElementById('calculateButton').addEventListener("click", function()
    {
        var spellLevel = spellLevelSelect.options[spellLevelSelect.selectedIndex].value;

        // validate rolls
        var rollsText = rolledNumbers.value;
        resultsDiv.innerHTML = SacredGeometry.wizard(spellLevel, rollsText, true);
    });
}
