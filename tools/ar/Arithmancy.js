Arithmancy = {};

Arithmancy.digitalRoot = function(spellname)
{
    // translate each letter in the spell name into its correct value, and add all of the values together
    var total = 0;
    for (var i = 0; i < spellname.length; i++)
    {
        total += Arithmancy.numericalValue(spellname.charAt(i));
    }

    // add digits together until there is one digit
    var digits = total.toString();
    while (digits.length > 1)
    {
        total = 0;
        for (var i = 0; i < digits.length; i++)
        {
            total += parseInt(digits.charAt(i));
        }
        digits = total.toString();
    }
    return total;
};

Arithmancy.numericalValue = function(c)
{
    c = c.toLowerCase();
    if (c == 'a' || c == 'j' || c == 's')
    {
        return 1;
    }
    else if (c == 'b' || c == 'k' || c == 't')
    {
        return 2;
    }
    else if (c == 'c' || c == 'l' || c == 'u')
    {
        return 3;
    }
    else if (c == 'd' || c == 'm' || c == 'v')
    {
        return 4;
    }
    else if (c == 'e' || c == 'n' || c == 'w')
    {
        return 5;
    }
    else if (c == 'f' || c == 'o' || c == 'x')
    {
        return 6;
    }
    else if (c == 'g' || c == 'p' || c == 'y')
    {
        return 7;
    }
    else if (c == 'h' || c == 'q' || c == 'z')
    {
        return 8;
    }
    else if (c == 'i' || c == 'r')
    {
        return 9;
    }

    return 0;
};