window.onload = function()
{
    var inputBox = document.getElementById('spellname');
    inputBox.onkeyup = function()
    {
        document.getElementById('digitalroot').innerHTML = Arithmancy.digitalRoot(inputBox.value);
    };
};
