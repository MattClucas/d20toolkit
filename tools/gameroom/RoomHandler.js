/**
 * The RoomHandler object contains all the logic necessary to interface with roomAccess.php.
 * It serves to decouple and separate the concerns of the main game room logic and the room handling logic.
 *
 * Depends on INTERFACE from InterfaceConstants.php.
 * Depends on Jquery's $.ajax() function.
 */

function RoomReq()
{}
RoomReq.prototype.setRequestType = function(requestType)
{
    this[INTERFACE.REQUEST_TYPE] = requestType;
};
RoomReq.prototype.setRoom = function(room)
{
    this[INTERFACE.REQUEST_ROOM_NAME] = room;
};
RoomReq.prototype.setRoomPassword = function(password)
{
    this[INTERFACE.REQUEST_ROOM_PASSWORD] = password;
};
RoomReq.prototype.setUserId = function(userId)
{
    this[INTERFACE.REQUEST_USER] = userId;
};
RoomReq.prototype.isRandomRoom = function(isRandomRoom)
{
    this[INTERFACE.REQUEST_RANDOM] = isRandomRoom;
};
RoomReq.prototype.isOpenRoom = function(isOpenRoom)
{
    this[INTERFACE.REQUEST_OPEN] = isOpenRoom;
};

/*
 * RoomResponseHandler has callback functions to handle responses for a type of request.
 *
 * There is one success callback function and many different error functions to handle
 * the different types of errors. If no error callback is set for a particular error,
 * the default error function is used.
 */
function RoomResponseHandler()
{}
// Handles a successful response
RoomResponseHandler.prototype.setSuccessFunc = function(func)
{
    this.successFunc = func;
};
// Handles default errors or errors that should not occur. If an error occurs
// and the specific error handling function is not set, this function will be used.
RoomResponseHandler.prototype.setErrorDefaultFunc = function(func)
{
    this.errorDefaultFunc = func;
};
// Error when trying to create a room that already exists
RoomResponseHandler.prototype.setErrorRoomAlreadyExistsFunc = function(func)
{
    this.errorRoomAlreadyExistsFunc = func;
};
// Error for incorrect password when trying to join a room
RoomResponseHandler.prototype.setErrorPasswordIncorrectFunc = function(func)
{
    this.errorPasswordIncorrectFunc = func;
};
// Error for trying to join a room that does not exist or there are no rooms to join
RoomResponseHandler.prototype.setErrorRoomDoesNotExistFunc = function(func)
{
    this.errorRoomDoesNotExistFunc = func;
};
// Error for when the request data is malformed
RoomResponseHandler.prototype.setErrorBadRequestFunc = function(func)
{
    this.errorBadRequestFunc = func;
};
// Error for when the database is having problems
RoomResponseHandler.prototype.setErrorDatabaseIssueFunc = function(func)
{
    this.errorDatabaseIssueFunc = func;
};
// Error for when the server cannot be reached
RoomResponseHandler.prototype.setErrorServerConnectionFunc = function(func)
{
    this.errorServerConnectionFunc = func;
};

/*
 * Constructor for the RoomHandler object which handles Room Accesses.
 *
 * userId: The user id of the local user.
 */
function RoomHandler()
{
    this.room = null;
    this.userId = null;
    this.pingListeners = [];
    this.joinRoomListeners = [];
    this.leaveRoomListeners = [];
    this.createRoomListeners = [];
    this.updateUserCountListeners = [];
}

RoomHandler.prototype.setUserId = function(userId)
{
    this.userId = userId;
};
RoomHandler.prototype.getUserId = function()
{
    return this.userId;
};

/*
 * Adds a RoomResponseHandler that listens for join room events.
 */
RoomHandler.prototype.addJoinRoomListener = function(listener)
{
    if (!listener)
    {
        return;
    }
    this.joinRoomListeners.push(listener);
};

/*
 * Adds a RoomResponseHandler that listens for leave room events.
 */
RoomHandler.prototype.addLeaveRoomListener = function(listener)
{
    if (!listener)
    {
        return;
    }
    this.leaveRoomListeners.push(listener);
};

/*
 * Adds a RoomResponseHandler that listens for create room events.
 */
RoomHandler.prototype.addCreateRoomListener = function(listener)
{
    if (!listener)
    {
        return;
    }
    this.createRoomListeners.push(listener);
};

/*
 * Adds a RoomResponseHandler that listens for ping room events.
 */
RoomHandler.prototype.addPingListener = function(listener)
{
    if (!listener)
    {
        return;
    }
    this.pingListeners.push(listener);
};

/*
 * Adds a RoomResponseHandler that listens for update user count events.
 */
RoomHandler.prototype.addUpdateUserCountListener = function(listener)
{
    if (!listener)
    {
        return;
    }
    this.updateUserCountListeners.push(listener);
};

/*
 * Internal use only. Generic function to handle firing all the listeners in a listeners array and passing them the relevant data.
 */
RoomHandler.prototype._notifyListeners = function(listeners, data, serverResponded)
{
    if (!listeners || listeners.constructor !== Array)
    {
        return;
    }

    for (var i = 0; i < listeners.length; i++)
    {
        var responseHandler = listeners[i];

        // choose the appropriate handler function
        var handlerFunction;
        if (serverResponded)
        {
            if (data[INTERFACE.RESPONSE_SUCCESS])
            {
                handlerFunction = responseHandler.successFunc;
            }
            else
            {
                switch (data[INTERFACE.RESPONSE_ERROR_CODE])
                {
                    case INTERFACE.ERROR_BAD_REQUEST_DATA:
                        handlerFunction = responseHandler.errorBadRequestFunc;
                        break;
                    case INTERFACE.ERROR_DATABASE_ISSUE:
                        handlerFunction = responseHandler.errorDatabaseIssueFunc;
                        break;
                    case INTERFACE.ERROR_ROOM_DOES_NOT_EXIST:
                        handlerFunction = responseHandler.errorRoomDoesNotExistFunc;
                        break;
                    case INTERFACE.ERROR_PASSWORD_INCORRECT:
                        handlerFunction = responseHandler.errorPasswordIncorrectFunc;
                        break;
                    case INTERFACE.ERROR_ROOM_ALREADY_EXISTS:
                        handlerFunction = responseHandler.errorRoomAlreadyExistsFunc;
                        break;
                    default:
                        handlerFunction = responseHandler.errorDefaultFunc;
                        break;
                }
            }
        }
        else
        {
            handlerFunction = responseHandler.errorServerConnectionFunc;
        }

        // set the function to the default error function
        // if there is no function set and there is an error
        if (!serverResponded || !data[INTERFACE.RESPONSE_SUCCESS])
        {
            handlerFunction = handlerFunction || responseHandler.errorDefaultFunc;
        }

        // call the handler function
        if (handlerFunction)
        {
            handlerFunction(data);
        }
    }
};

/*
 * Sets the user id of the local user.
 */
RoomHandler.prototype.setUserId = function(userId)
{
    this.userId = userId;
};

/*
 * Internal use only. Creates a new RoomReq object with default values set.
 */
RoomHandler.prototype._createRequest = function(requestType)
{
    if (!requestType)
    {
        return;
    }

    var request = new RoomReq();
    request.setRequestType(requestType);
    request.setRoom(this.room);
    request.setUserId(this.userId);
    return request;
};

/*
 * Internal use only. Sends a request to the server.
 *
 * request: A RoomReq object with request data.
 * listeners: The appropriate listener array to call on success or error.
 */
RoomHandler.prototype._sendRequest = function(request, listeners)
{
    if (!request || request.constructor !== RoomReq)
    {
        return;
    }

    var self = this;
    $.ajax(
    {
        type: "POST",
        url: "roomAccess.php",
        data: request,
        success: function(data)
        {
            self._notifyListeners(listeners, data, true);
        },
        error: function(data)
        {
            self._notifyListeners(listeners, data, false);
        },
        dataType: "json"
    });
};

/*
 * Internal use only. Pings the room to keep it alive.
 */
// default refresh rate is 5 minutes
RoomHandler.prototype._pingRoomRefreshMilliseconds = 1000 * 60 * 5;
RoomHandler.prototype._pingRoom = function()
{
    // only ping if we are in a room
    if (!this.room)
    {
        return;
    }

    var req = this._createRequest(INTERFACE.TYPE_PING_ROOM);
    this._sendRequest(req, this.pingListeners);
    setTimeout(this._pingRoom, this._pingRoomRefreshMilliseconds);
};

/*
 * Internal use only. Gets the updated number of users in rooms.
 */
// default refresh rate is 30 seconds
RoomHandler.prototype._updateUserCountRefreshMilliseconds = 1000 * 30;
RoomHandler.prototype._updateUserCount = function()
{
    var req = this._createRequest(INTERFACE.TYPE_GET_NUM_USERS);
    this._sendRequest(req, this.updateUserCountListeners);
    setTimeout(this._updateUserCount, this._updateUserCountRefreshMilliseconds);
};

/*
 * Joins a room.
 *
 * roomName: The name of the room to join. Optional. If left blank, the user
 *     will join a random open room.
 * roomPassword: The password of the room to join. Optional.
 */
RoomHandler.prototype.joinRoom = function(roomName, roomPassword)
{
    var req = this._createRequest(INTERFACE.TYPE_JOIN_ROOM);
    if (roomName)
    {
        req.setRoom(roomName);
    }
    else
    {
        req.isRandomRoom(true);
    }

    // only set the password if the roomName is set too
    if (roomName && roomPassword)
    {
        req.setRoomPassword(roomPassword);
    }


    this._sendRequest(req, this.joinRoomListeners);
};

/*
 * Creates a new room. If the room password is not set the room is treated
 * as an open room meaning users may randomly join it.
 *
 * roomName: The name of the new room. Required
 * roomPassword: The password of the new room. Optional. Leave blank to
 *     set room as open.
 */
RoomHandler.prototype.createRoom = function(roomName, roomPassword)
{
    // room name is required
    if (!roomName)
    {
        return;
    }

    var req = this._createRequest(INTERFACE.TYPE_CREATE_ROOM);
    req.setRoom(roomName);
    if (roomPassword)
    {
        req.setRoomPassword(roomPassword);
    }
    else
    {
        req.isOpenRoom(true);
    }


    this._sendRequest(req, this.createRoomListeners);
};

/*
 * Leaves the current room.
 *
 * Leaves the current room by sending the leave room request.
 * If there is no current room set this function does nothing.
 * This function results in the current room being null.
 *
 * Listen to this request's response by adding a leaveRoomListener.
 */
RoomHandler.prototype.leaveRoom = function()
{
    // we can't leave a room if we aren't in one
    if (!this.room)
    {
        return;
    }

    var req = this._createRequest(INTERFACE.TYPE_LEAVE_ROOM);
    this._sendRequest(req, this.leaveRoomListeners);

    this.room = null;
};

/*
 * Initializes the RoomHandler object. Call this before using any of its methods.
 */
RoomHandler.prototype.init = function()
{
    // don't allow to be reinitialized
    if (this.initialized)
    {
        return;
    }
    this.initialized = true;


    var self = this;

    function roomChangeHandler(response)
    {
        // update the room name internally and begin pinging the room
        self.room = response[INTERFACE.RESPONSE_ROOM_NAME];
        setTimeout(self._pingRoom, 1000);
    }

    // add join room handler
    var joinRoomHandler = new RoomResponseHandler();
    joinRoomHandler.setSuccessFunc(roomChangeHandler);
    this.joinRoomListeners.push(joinRoomHandler);

    // add create room handler
    var createRoomHandler = new RoomResponseHandler();
    createRoomHandler.setSuccessFunc(roomChangeHandler);
    this.createRoomListeners.push(createRoomHandler);
};