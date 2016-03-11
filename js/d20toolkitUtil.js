/**
 * Meant to be a global holder of utility functions that could be used anywhere and do not have any dependencies, only pure javascript.
 */

D20_UTIL = {};

/**
 * Escapes HTML to be rendered as plain text.
 */
D20_UTIL.escapeHtml = (function()
{
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    return function(string)
    {
        return String(string).replace(/[&<>"'\/]/g, function(s)
        {
            return entityMap[s];
        });
    };
})();

/**
 * Returns the URL GET Request Parameters in an object.
 */
D20_UTIL.getUrlParams = function()
{
    var match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function(s)
        {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

    var urlParams = {};
    while (match = search.exec(query))
    {
        urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
};

/**
 * Returns a random color hex code.
 */
D20_UTIL.getRandomColor = function()
{
    return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
};

/**
 * Creates a css selector.
 * Use like createCSSSelector('.someClass', 'color: red; height: 10px;');
 */
D20_UTIL.createCSSSelector = function(selector, style)
{
    if (!document.styleSheets)
    {
        return;
    }

    if (document.getElementsByTagName('head').length == 0)
    {
        return;
    }

    var stylesheet, mediaType, i;

    if (document.styleSheets.length > 0)
    {
        for (i = 0; i < document.styleSheets.length; i++)
        {
            if (document.styleSheets[i].disabled)
            {
                continue;
            }
            var media = document.styleSheets[i].media;
            mediaType = typeof media;

            if (mediaType == 'string')
            {
                if (media == '' || (media.indexOf('screen') != -1))
                {
                    styleSheet = document.styleSheets[i];
                }
            }
            else if (mediaType == 'object')
            {
                if (media.mediaText == '' || (media.mediaText.indexOf('screen') != -1))
                {
                    styleSheet = document.styleSheets[i];
                }
            }

            if (typeof styleSheet != 'undefined')
            {
                break;
            }
        }
    }

    if (typeof styleSheet == 'undefined')
    {
        var styleSheetElement = document.createElement('style');
        styleSheetElement.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(styleSheetElement);

        for (i = 0; i < document.styleSheets.length; i++)
        {
            if (document.styleSheets[i].disabled)
            {
                continue;
            }
            styleSheet = document.styleSheets[i];
        }

        var media = styleSheet.media;
        mediaType = typeof media;
    }

    if (mediaType == 'string')
    {
        for (i = 0; i < styleSheet.rules.length; i++)
        {
            if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase())
            {
                styleSheet.rules[i].style.cssText = style;
                return;
            }
        }

        styleSheet.addRule(selector, style);
    }
    else if (mediaType == 'object')
    {
        var styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;

        for (i = 0; i < styleSheetLength; i++)
        {
            if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase())
            {
                styleSheet.cssRules[i].style.cssText = style;
                return;
            }
        }

        styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
    }
}