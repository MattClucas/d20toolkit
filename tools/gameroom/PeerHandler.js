/**
 * The PeerHandler object wraps the PeerJS client object and should serve as the interface between
 * the game room logic and the peer js client object and handling logic.
 *
 * Depends on peerjs.
 */
function PeerHandler()
{
    this.peers = {}; // hashmap of id -> peer connection
    this.peerIds = []; // array of peer ids
    this.localUser = {}; // stores information about the local user like userName, color, ...

    // arrays of listener objects that will fire when changes happen
    this.openListeners = [];
    this.errorListeners = [];
    this.peerOpenListeners = [];
    this.peerClosedListeners = [];
    this.peerErrorListeners = [];
    this.peerColorChangeListeners = [];
    this.peerNameChangeListeners = [];
    this.peerChatMsgListeners = [];
    this.peerDrawListeners = [];
};
PeerHandler.prototype.MSG_TYPE_NAME_CHANGE = "userName";
PeerHandler.prototype.MSG_TYPE_CHAT = "chat";
PeerHandler.prototype.MSG_TYPE_COLOR = "color";
PeerHandler.prototype.MSG_TYPE_DRAW = "draw";

PeerHandler.prototype.getUserId = function()
{
    return this.localUser.id;
}

/*
 * Sets a function which handles how to log the log messages.
 */
PeerHandler.prototype.setLoggingFunction = function(logger)
{
    this.logger = logger;
};

/*
 * Sets the userName of the local user and automatically updates peers of this userName.
 *
 * userName: a string of the user's name.
 */
PeerHandler.prototype.setUserName = function(userName)
{
    this.localUser.userName = userName;
    this.sendMessage(this.MSG_TYPE_NAME_CHANGE, userName);
};

/*
 * Returns the set userName of the local user.
 */
PeerHandler.prototype.getUserName = function()
{
    return this.localUser.userName;
};

/*
 * Sends a data message to the peers.
 *
 * peerIds: an array of peerIds to send the message to. To send to all peers, don't assign peerIds.
 * msgType: one of the defined message types like name change, color change, chat message, ...
 * msgContent: the actual content of the message.
 */
PeerHandler.prototype.sendMessage = function(msgType, msgContent, peerIds)
{
    // a message must have a type and content
    if (!msgType || !msgContent)
    {
        return;
    }

    // default is to send the message to all peers
    if (!peerIds || peerIds.constructor !== Array)
    {
        peerIds = this.peerIds;
    }

    for (var i = 0; i < peerIds.length; i++)
    {
        var peer = this.peers[peerIds[i]];
        if (!peer)
        {
            continue;
        }

        peer.send(
        {
            type: msgType,
            content: msgContent
        });
    }
};

/*
 * Sets the color of the local user and automatically updates peers of this color.
 *
 * color: a hex string representing the color
 */
PeerHandler.prototype.setColor = function(color)
{
    this.localUser.color = color;
    this.sendMessage(this.MSG_TYPE_COLOR, color);
};

/*
 * Returns the set color of the local user.
 */
PeerHandler.prototype.getColor = function()
{
    return this.localUser.color;
};

/*
 * OpenListeners should accept a string which is the ID of the local user.
 */
PeerHandler.prototype.addOpenListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.openListeners.push(listener);
};

/*
 * ErrorListeners should accept an error string.
 */
PeerHandler.prototype.addErrorListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.errorListeners.push(listener);
};

/*
 * PeerOpenListeners should accept a string representing the peerId.
 */
PeerHandler.prototype.addPeerOpenListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerOpenListeners.push(listener);
};

/*
 * PeerClosedListeners should accept a string representing the peerId.
 */
PeerHandler.prototype.addPeerClosedListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerClosedListeners.push(listener);
};

/*
 * PeerErrorListeners should accept an object with members:
 *     peerId: The peerjs id of the peer.
 *     error: A string with error details.
 */
PeerHandler.prototype.addPeerErrorListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerErrorListeners.push(listener);
};

/*
 * NameChangelisteners should accept an object with members:
 *     peerId: The peerjs id of the peer.
 *     userName: A string name of the peer.
 */
PeerHandler.prototype.addPeerNameChangeListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerNameChangeListeners.push(listener);
};

/*
 * NameChangelisteners should accept an object with members:
 *     peerId: The peerjs id of the peer.
 *     msg: A string message from the peer.
 */
PeerHandler.prototype.addPeerChatMsgListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerChatMsgListeners.push(listener);
};

/*
 * PeerColorChangeListeners should accept an object with members:
 *     peerId: The peerjs id of the peer.
 *     color: A hex string representing the peer's color.
 */
PeerHandler.prototype.addPeerColorChangeListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerColorChangeListeners.push(listener);
};

/*
 * PeerDrawListeners should accept an object with members:
 *  peerId: The peerjs id of the peer.
 *  color: A hex string representing the color to draw with.
 *  points: An array of points {x, y} where each coordinate is a percentage of
 *          how far wide and high to draw a point on the local users's canvas.
 *  clear: If true, clears the peer's layer.
 */
PeerHandler.prototype.addPeerDrawListener = function(listener)
{
    if (!listener)
    {
        return;
    }

    this.peerDrawListeners.push(listener);
};

/*
 * Internal use only. Generic function to handle firing all the listeners in a listeners array and passing them the relevant data.
 */
PeerHandler.prototype._notifyListeners = function(listeners, data)
{
    if (!listeners || listeners.constructor !== Array)
    {
        return;
    }

    for (var i = 0; i < listeners.length; i++)
    {
        listeners[i](data);
    }
};

/*
 * Internal use only. Handles when a peer sends a message to the local user.
 */
PeerHandler.prototype._handlePeerMsg = function(peerID, data)
{
    if (!data || !data.type || !data.content)
    {
        return;
    }

    var listenerData = {};
    listenerData.peerId = peerID;
    var listeners;
    switch (data.type)
    {
        case this.MSG_TYPE_NAME_CHANGE:
            listenerData[this.MSG_TYPE_NAME_CHANGE] = data.content;
            listeners = this.peerNameChangeListeners;
            break;
        case this.MSG_TYPE_CHAT:
            listenerData[this.MSG_TYPE_CHAT] = data.content;
            listeners = this.peerChatMsgListeners;
            break;
        case this.MSG_TYPE_COLOR:
            listenerData[this.MSG_TYPE_COLOR] = data.content;
            listeners = this.peerColorChangeListeners;
            break;
        case this.MSG_TYPE_DRAW:
            listenerData[this.MSG_TYPE_DRAW] = data.content;
            listeners = this.peerDrawListeners;
            break;
    }
    this._notifyListeners(listeners, listenerData);
};

/*
 * Internal use only. Sets up functions that handle a new peer connection.
 */
PeerHandler.prototype._handleNewPeer = function(connection)
{
    // check if this connection somehow already exists
    var prevConn = this.peers[connection.peer];
    if (prevConn && prevConn.type == "data" && prevConn.open)
    {
        // connection already exists
        return;
    }

    // add the peer id to the array of ID's if it is not already
    if (this.peerIds.indexOf(connection.peer) == -1)
    {
        this.peerIds.push(connection.peer);
    }

    // add the conn to the list
    this.peers[connection.peer] = connection;
    var self = this;
    // handles the opening event of the connection
    connection.on('open', function()
    {
        // Receive messages
        connection.on('data', function(data)
        {
            self._handlePeerMsg(connection.peer, data);
        });

        // send the peer our color
        self.sendMessage(self.MSG_TYPE_COLOR, self.getColor(), [connection.peer]);

        // send the peer our user name
        self.sendMessage(self.MSG_TYPE_NAME_CHANGE, self.getUserName(), [connection.peer]);

        self._notifyListeners(self.peerOpenListeners, connection.peer);
    });

    // handles the closing event of the connection
    connection.on("close", function()
    {
        self._deletePeer(connection.peer);
    });

    // handles error events of the connection
    connection.on("error", function(err)
    {
        self._notifyListeners(self.peerErrorListeners,
        {
            peerId: connection.peer,
            error: err
        });
    });
};

/*
 * Internal use only. Deletes the peer if it exists
 */
PeerHandler.prototype._deletePeer = function(peerId)
{
    // remove the connection
    delete this.peers[peerId];
    var peerIndex = this.peerIds.indexOf(peerId);
    if (peerIndex > -1)
    {
        delete this.peerIds[peerIndex];
    }
    this._notifyListeners(this.peerClosedListeners, peerId);
};

/*
 * Connects to a list of peer ids.
 */
PeerHandler.prototype.connectToPeers = function(peerIds)
{
    // check if peerIds is a valid array
    if (!peerIds || peerIds.constructor !== Array)
    {
        return;
    }

    // make sure we've established our own connection first
    if (!this.getUserId())
    {
        return;
    }

    for (var i = 0; i < peerIds.length; i++)
    {
        var peerId = peerIds[i];

        // don't connect to ourselves
        if (peerId == this.getUserId())
        {
            continue;
        }

        // check if this connection somehow already exists
        var prevConn = this.peers[peerId];
        if (prevConn && prevConn.type == "data" && prevConn.open)
        {
            // connection already exists
            continue;
        }

        // create new connection
        var connection = this.peerClient.connect(peerId,
        {
            reliable: true
        });
        this._handleNewPeer(connection);
    }
};

/*
 * Disconnects from a list of peer ids
 */
PeerHandler.prototype.disconnectFromPeers = function(peerIds)
{
    // make sure we have our own connection first
    if (!this.getUserId())
    {
        return;
    }

    // default to disconnecting from all peers
    if (!peerIds)
    {
        peerIds = this.peerIds;
    }

    // close all valid connections in the list
    for (var i = 0; i < peerIds.length; i++)
    {
        var peerId = peerIds[i];
        if (peerId)
        {
            this.peers[peerId].close();
            this._deletePeer(peerId);
        }
    }
};

/*
 * Creates the PeerJs object which gets the key and listens for new connections.
 */
PeerHandler.prototype.init = function()
{
    var self = this;
    this.peerClient = new Peer(
    {
        key: '4hgaohcj6wbi6bt9',

        // Set highest debug level (log everything!).
        debug: 3,

        config:
        {
            'iceServers': [
            {
                url: 'stun:stun.l.google.com:19302'
            },
            {
                url: 'turn:numb.viagenie.ca',
                credential: 'muazkh',
                username: 'webrtc@live.com'
            }]
        },

        // Set a logging function:
        logFunction: function()
        {
            // call the logging function if it is set
            if (self.logger)
            {
                self.logger(arguments);
            }
        }
    });

    // Show this peer's ID.
    this.peerClient.on('open', function(id)
    {
        self.localUser.id = id;
        self._notifyListeners(self.openListeners, id);
        delete self.openListeners;
    });

    this.peerClient.on('error', function(err)
    {
        self._notifyListeners(self.errorListeners, err);
        delete self.errorListeners;
    });

    // Await connections from others
    this.peerClient.on('connection', function(connection)
    {
        self._handleNewPeer(connection);
    });
};