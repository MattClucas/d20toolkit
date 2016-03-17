function UnreadMessageNotifier()
{
    this.baseTitle = document.title;
    this.unreadMessages = 0;
    var self = this;
    window.addEventListener("focus", function(event)
    {
        self.unreadMessages = 0;
        document.title = self.baseTitle;
    }, false);
}
UnreadMessageNotifier.prototype.addMessage = function()
{
    if (!document.hasFocus())
    {
        this.unreadMessages++;
        document.title = "(" + this.unreadMessages + ") " + this.baseTitle;
    }
};