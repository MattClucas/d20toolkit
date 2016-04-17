/**
 * A Tab object holds references to a few objects that are relevant to a UI Tab and provides a
 * few convienient methods that can be called on the tab.
 *
 * $link jquery dom object for the <li> that links to the content div for this tab
 * $contentDiv jquery dom object for the <div> that contains all the content for this tab
 * identifier string that is used by the TabManager to identify the tab. This may be different from
 * the title but is created from the title.
 */
function Tab($link, $contentDiv, identifier)
{
    if (!identifier || typeof identifier !== "string")
    {
        throw "identifier is either not defined or not a string.";
    }
    if (!$link || !$contentDiv)
    {
        throw "Link or Content div are not defined.";
    }

    this.$link = $link;
    this.$contentDiv = $contentDiv;
    this.identifier = identifier;
}

/**
 * Hides the tab completely.
 */
Tab.prototype.hide = function()
{
    this.$contentDiv.hide();
    this.$link.hide();
};

/**
 * Shows this tab if it was hidden.
 */
Tab.prototype.show = function()
{
    this.$contentDiv.show();
    this.$link.show();
};

/**
 * Removes this tab from the DOM.
 */
Tab.prototype.remove = function()
{
    this.$contentDiv.remove();
    this.$link.remove();
};
// ensure nothing modifies the prototype of a Tab
Object.freeze(Tab.prototype);

/**
 * The controller object that manages the creation, deletion, and references to tabs.
 *
 * $linkList The jquery dom object for the <ul> element that contains all the links to the tabs.
 * $contentDivList The jquery dom object for the <div> element that contains all the content divs for
 * the tabs.
 */
function TabManager($linkList, $contentDivList)
{
    var self = this;
    this.$linkList = $linkList;
    this.$contentDivList = $contentDivList;
    this.tabIdentifiers = {};
}
// this is the attribute name used in the DOM which contains the identifier for a tab
TabManager.prototype.IDENTIFIER_ATTRIBUTE_NAME = "tab-title";

/**
 * Creates a new tab from the given title. If title is falsy or is not a string,
 * this method simply returns. Since the title will be displayed as the link text for the tab,
 * it is escaped using the D20_UTIL.escapeHtml() function. If there is already a tab with the
 * same title, this function will append a number on the end of the title and continue to
 * increment it until it is no longer conflicting. Every group of spaces in the title (if
 * there are any) is converted to a single underscore.
 *
 * title A non-empty string that will be shown as the link text for this tab and used to create
 *       the identifier string for this Tab.
 * return A new Tab object.
 */
TabManager.prototype.createTab = function(title)
{
    // validate title
    if (!title || typeof title !== "string")
    {
        return;
    }
    var self = this;

    var sanitizedTitle = D20_UTIL.escapeHtml(title);
    var idSanitizedTitle = sanitizedTitle.replace(/\s+/g, "_");
    var newTabIdentifier = idSanitizedTitle;

    // keep appending a number to the end of the title until it is unique
    var count = 1;
    while (this.tabIdentifiers[newTabIdentifier])
    {
        newTabIdentifier = idSanitizedTitle + "" + count++;
    }

    // create the link and content div
    var $link = $('<li id="' + newTabIdentifier + 'TabLink" ' +
        self.IDENTIFIER_ATTRIBUTE_NAME + '="' + newTabIdentifier +
        '"><a href="#' + newTabIdentifier + 'TabContent" ' +
        'data-toggle="tab">' + sanitizedTitle + '</a></li>');
    var $contentDiv = $('<div class="tab-pane" ' +
        'id="' + newTabIdentifier + 'TabContent"' +
        self.IDENTIFIER_ATTRIBUTE_NAME + '="' + newTabIdentifier +
        '"></div>');

    // add it to the hashmap of tabs
    var tabObject = new Tab($link, $contentDiv, newTabIdentifier);
    Object.freeze(tabObject);
    this.tabIdentifiers[newTabIdentifier] = tabObject;

    // add link and content div to document
    this.$linkList.append($link);
    this.$contentDivList.append($contentDiv);

    return tabObject;
};

/**
 * Returns the Tab object for the given tabIdentifier if it exists.
 *
 * tabIdentifier The string identifier of the Tab to retrieve.
 */
TabManager.prototype.getTab = function(tabIdentifier)
{
    // only return the property if it is a tab and not if it is default property
    if (this.tabIdentifiers.hasOwnProperty(tabIdentifier))
    {
        return this.tabIdentifiers[tabIdentifier];
    }
    return null;
};

/**
 * Either returns the Tab object for the given tabIdentifier or creates a new Tab object
 * using the tabIdentifier as the title.
 *
 * tabIdentifier The string identifier of the Tab to get or create.
 */
TabManager.prototype.getOrCreateTab = function(tabIdentifier)
{
    return this.getTab(tabIdentifier) || this.createTab(tabIdentifier);
};

/**
 * Removes the tab for the given tabIdentifier from the DOM and destroys the references to it
 * from the TabManager.
 *
 * tabIdentifier The string identifier of the Tab to remove.
 */
TabManager.prototype.removeTab = function(tabIdentifier)
{
    // only return the property if it is a tab and not if it is default property
    if (this.tabIdentifiers.hasOwnProperty(tabIdentifier))
    {
        this.tabIdentifiers[tabIdentifier].remove();
        delete this.tabIdentifiers[tabIdentifier];
    }
};

/**
 * Initializes the TabManager. This function is necessary because some of the properties of the
 * TabManager must be declared after the constructor.
 */
TabManager.prototype.init = function()
{
    var self = this;
    // loop through and create an object containing both the link and the contentDiv for each tab
    this.$linkList.children("li").each(function()
    {
        var identifier = $(this).attr(self.IDENTIFIER_ATTRIBUTE_NAME);
        self.tabIdentifiers[identifier] = {
            identifier: identifier,
            $link: $(this)
        };
    });

    this.$contentDivList.children("div").each(function()
    {
        var identifier = $(this).attr(self.IDENTIFIER_ATTRIBUTE_NAME);
        var tabObject = self.tabIdentifiers[identifier];
        if (tabObject && tabObject.$link)
        {
            // create new Tab object from the link, div, and identifier
            self.tabIdentifiers[identifier] = new Tab(tabObject.$link, $(this), identifier);

            // make tabObject immutable
            Object.freeze(self.tabIdentifiers[identifier]);
        }
    });
};
// ensures that the TabManager's prototype / class definition is not changed.
Object.freeze(TabManager.prototype);