function CanvasHandler(canvasDOM)
{
    this.canvas = canvasDOM;
    this.context = canvasDOM.getContext('2d');
    this.context.lineWidth = '2';
    this.widthAspect = 16;
    this.heightAspect = 9;
    this.scale = 1.0;
    this.aspectRatio = this.widthAspect / this.heightAspect;
    this.borderBufferSize = 8; // pixels of spacing between the canvas and other stuff
    this.gameBoxSizeFeet = 5; // every grid box is supposed to represent 5 feet
    // represent how wide and high the canvas is supposed to be
    this.totalCanvasDistanceWide = (this.widthAspect / this.scale) * this.gameBoxSizeFeet;
    this.totalCanvasDistanceHigh = (this.heightAspect / this.scale) * this.gameBoxSizeFeet;

    // stores all the actions the local user does
    this.localPoints = []; // double array, contains every array of points the local user applied to the canvas
    this.localVisible = true;

    this.changeListeners = [];
    this.layers = {}; // hashmap of string -> layers, which are arrays of canvases
    this.gridLines = false;

    // create flags for mouse state
    this.isLeftMouseButtonActive = false;
    this.isRightMouseButtonActive = false;
}
CanvasHandler.prototype.MSG_TYPE_SNIPPET = "SNIPPET";
CanvasHandler.prototype.MSG_TYPE_FULL_DRAWING = "FULL_DRAWING";
CanvasHandler.prototype.MSG_TYPE_CLEAR = "CLEAR";

CanvasHandler.prototype._resize = function()
{
    // dont allow height of canvas to be more than the window minus the header and bottom buttons
    var maxHeight = window.innerHeight - (115 + 75);
    var maxWidth = window.innerWidth - (300 + this.borderBufferSize);
    var maxAspectRatioWidth = maxHeight * this.aspectRatio;
    var maxAspectRatioHeight = maxWidth / this.aspectRatio;

    // choose how big the canvas is based off of its maximum allowed height
    var height = Math.min(maxAspectRatioHeight, maxHeight);
    var width = height * this.aspectRatio;

    // set the width and height
    this.canvas.style.width = width + "px";
    this.canvas.width = width;
    this.canvas.style.height = height + "px";
    this.canvas.height = height;

    for (var layerId in this.layers)
    {
        if (this.layers.hasOwnProperty(layerId))
        {
            this.layers[layerId].width = this.canvas.offsetWidth;
            this.layers[layerId].height = this.canvas.offsetHeight;
        }
    }
    this.redrawLayers();
};

/**
 * Adds a listener that is notified whenever the local user makes changes to their layer.
 */
CanvasHandler.prototype.addChangeListener = function(listener)
{
    this.changeListeners.push(listener);
};

/**
 * Handles layer canvas changes and events.
 */
CanvasHandler.prototype.handleLayerDrawEvent = function(layerId, data)
{
    var content = data.content;
    switch (data.type)
    {
        case this.MSG_TYPE_SNIPPET:
            this.drawLayerPoints(layerId, content.points, content.color, content.lineWidth);
            break;
        case this.MSG_TYPE_CLEAR:
            this.clearLayer(layerId);
            break;
        case this.MSG_TYPE_FULL_DRAWING:
            this.removeLayer(layerId);
            this.applyCompleteDrawing(this._getLayer(layerId), content.points);
            this.redrawLayers();
            break;
    }
};

CanvasHandler.prototype.undoLastSnippet = function()
{
    this.localPoints.pop();
    this._notifyListeners(this.changeListeners, this.getFullDrawingMsg());
    this.redrawLayers();
};

CanvasHandler.prototype.setLineWidth = function(lineWidth)
{
    this.context.lineWidth = lineWidth;
};

CanvasHandler.prototype.getColor = function()
{
    return this.context.strokeStyle;
};

CanvasHandler.prototype.setColor = function(colorHex)
{
    this.context.strokeStyle = colorHex;
};

CanvasHandler.prototype.getFullDrawingMsg = function()
{
    return this._createMsg(this.MSG_TYPE_FULL_DRAWING,
    {
        points: this.localPoints
    });
};

/**
 * Internal use only. Creates a message object to send to other layer's canvas handlers.
 * Messages have a type string and a content object.
 */
CanvasHandler.prototype._createMsg = function(type, content)
{
    return {
        type: type,
        content: content
    };
};

/**
 * Clears the local user's points.
 */
CanvasHandler.prototype.clearLocalLayer = function()
{
    this.localPoints = [];
    if (this.localVisible)
    {
        this.redrawLayers();
    }
    var self = this;
    self._notifyListeners(self.changeListeners,
        self._createMsg(self.MSG_TYPE_CLEAR,
        {
            clear: true
        }));
};

/**
 * Sets the visiblity of the local user's layer.
 */
CanvasHandler.prototype.setLocalLayerVisibility = function(isVisible)
{
    var previousVisibility = this.localVisible;
    this.localVisible = isVisible;

    // redraw canvas if needed
    if (previousVisibility != isVisible)
    {
        this.redrawLayers();
    }
};

/**
 * Sets the visibility of the given layer.
 */
CanvasHandler.prototype.setLayerVisibility = function(layerId, isVisible)
{
    var previousVisibility = this.layers[layerId].isVisible;
    this.layers[layerId].isVisible = isVisible;

    // redraw canvas if needed
    if (previousVisibility != isVisible)
    {
        this.redrawLayers();
    }
};

CanvasHandler.prototype.setScale = function(scale)
{
    this.scale = scale;
    this.totalCanvasDistanceWide = (this.widthAspect / this.scale) * this.gameBoxSizeFeet;
    this.totalCanvasDistanceHigh = (this.heightAspect / this.scale) * this.gameBoxSizeFeet;
    if (this.gridLines)
    {
        this.redrawLayers();
    }
};

CanvasHandler.prototype.toggleGridLines = function()
{
    this.gridLines = !this.gridLines;
    this.gridLineColor = this.context.strokeStyle;
    this.redrawLayers();
};

CanvasHandler.prototype.drawGridLines = function()
{
    if (this.gridLines)
    {
        var max = 1.0;
        var xincrement = (max / this.widthAspect) * this.scale;
        var yincrement = (max / this.heightAspect) * this.scale;
        var canvas = this.canvas;
        for (var x = 0; x < max; x += xincrement)
        {
            this._drawPointsOnCanvas(canvas, [
            {
                x: x,
                y: 0
            },
            {
                x: x,
                y: max
            }], this.gridLineColor, 1);
        }
        for (var y = 0; y < max; y += yincrement)
        {
            this._drawPointsOnCanvas(canvas, [
            {
                x: 0,
                y: y
            },
            {
                x: max,
                y: y
            }], this.gridLineColor, 1);
        }
    }
};

/**
 * Redraws all the layers and all the local drawing actions.
 */
CanvasHandler.prototype.redrawLayers = function()
{
    if (this.isRightMouseButtonActive) return;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGridLines();
    for (var layerId in this.layers)
    {
        if (this.layers.hasOwnProperty(layerId) && this.layers[layerId] && this.layers[layerId].isVisible)
        {
            this.context.drawImage(this.layers[layerId], 0, 0);
        }
    }

    if (this.localVisible)
    {
        this.applyCompleteDrawing(this.canvas, this.localPoints);
    }
};

CanvasHandler.prototype.applyCompleteDrawing = function(canvas, fullDrawingPoints)
{
    for (var i = 0; i < fullDrawingPoints.length; i++)
    {
        var snippet = fullDrawingPoints[i];
        this._drawPointsOnCanvas(canvas, snippet.points, snippet.color, snippet.lineWidth);
    }
};

/**
 * Internal use only. Gets or creates the layer for the given layer id.
 */
CanvasHandler.prototype._getLayer = function(layerId)
{
    // create the layer if it isn't already
    if (!this.layers[layerId])
    {
        this.layers[layerId] = document.createElement("canvas");
        this.layers[layerId].context = this.layers[layerId].getContext('2d');
        this.layers[layerId].width = this.canvas.width;
        this.layers[layerId].height = this.canvas.height;
        this.layers[layerId].isVisible = true;
    }
    return this.layers[layerId];
};

CanvasHandler.prototype.removeLayer = function(layerId)
{
    var layer = this.layers[layerId];
    if (layer)
    {
        this.layers[layerId] = null;
        if (layer.isVisible)
        {
            this.redrawLayers();
        }
    }
};

/**
 * Clears the given layer id's layer of all content.
 */
CanvasHandler.prototype.clearLayer = function(layerId)
{
    var layer = this._getLayer(layerId);
    layer.context.clearRect(0, 0, layer.width, layer.height);
    if (layer.isVisible)
    {
        this.redrawLayers();
    }
};

/**
 * Draws the points with the given color on the layer that belongs to the layerId.
 */
CanvasHandler.prototype.drawLayerPoints = function(layerId, points, color, lineWidth)
{
    var layer = this._getLayer(layerId);
    this._drawPointsOnCanvas(layer, points, color, lineWidth);

    if (layer.isVisible)
    {
        this.redrawLayers();
    }
};

/**
 * Draws the points with the given color onto the canvas.
 */
CanvasHandler.prototype._drawPointsOnCanvas = function(canvas, points, color, lineWidth)
{
    if (!points || points.constructor !== Array || points.length <= 0)
    {
        return;
    }
    var context = canvas.getContext('2d');

    // save previous values
    var prevColor = context.strokeStyle;
    var prevLineWidth = context.lineWidth;
    context.strokeStyle = color;
    context.lineWidth = lineWidth;

    context.beginPath();
    context.moveTo(points[0].x * canvas.width, points[0].y * canvas.height);

    for (var i = 1; i < points.length; i++)
    {
        var x = points[i].x * canvas.width;
        var y = points[i].y * canvas.height;
        context.lineTo(x, y);
    }
    context.stroke();
    context.strokeStyle = prevColor;
    context.lineWidth = prevLineWidth;
};

/*
 * Internal use only. Generic function to handle firing all the listeners in a listeners array and passing them the relevant data.
 */
CanvasHandler.prototype._notifyListeners = function(listeners, data)
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

CanvasHandler.prototype.calculateDistance = function(point1, point2)
{
    function validatePoint(point)
    {
        return point !== null &&
            typeof point === 'object' &&
            point.x && point.x >= 0 && point.x <= 1 &&
            point.y && point.y >= 0 && point.y <= 1;
    }

    // validate points
    if (!validatePoint(point1) || !validatePoint(point2))
    {
        return;
    }

    var xDelta = (point1.x - point2.x) * (this.totalCanvasDistanceWide);
    var yDelta = (point1.y - point2.y) * (this.totalCanvasDistanceHigh);
    var distance = Math.sqrt(xDelta * xDelta + yDelta * yDelta);
    return distance;
};

CanvasHandler.prototype.setDistanceCallback = function(callback)
{
    this.distanceCallbackFunction = callback;
};

CanvasHandler.prototype.init = function()
{
    var self = this;
    var LEFT_BUTTON = 0;
    var RIGHT_BUTTON = 2;
    var savedCanvasKey = 'MEASUREMENT_SAVE_CANVAS';

    this.canvas.addEventListener('mousedown', mouseDownHandler, false);
    this.canvas.addEventListener('mousemove', mouseMoveHandler, false);
    this.canvas.addEventListener('mouseup', mouseUpHandler, false);
    this.canvas.addEventListener('keydown', function(event)
    {
        event = event || window.event;
        // control+z
        if (event.keyCode == 46)
        {
            event.preventDefault();
            self.undoLastSnippet();
        }
    });

    (function()
    {
        window.addEventListener("resize", resizeThrottler, false);

        var resizeTimeout;

        function resizeThrottler()
        {
            // ignore resize events as long as an actualResizeHandler execution is in the queue
            if (!resizeTimeout)
            {
                resizeTimeout = setTimeout(function()
                {
                    resizeTimeout = null;
                    actualResizeHandler();

                    // The actualResizeHandler will execute at a rate of 15fps
                }, 66);
            }
        }

        function actualResizeHandler()
        {
            self._resize();
        }
    }());


    var startingPoint = null;

    // array to collect coordinates
    var points = [];

    function mouseMoveHandler(e)
    {
        switch (e.button)
        {
            case LEFT_BUTTON:
                draw(e);
                break;
            case RIGHT_BUTTON:
                measure(e);
                break;
        }
    }

    function measure(e)
    {
        if (!self.isRightMouseButtonActive || self.isLeftMouseButtonActive) return;

        // cross-browser canvas coordinates
        var x = e.offsetX || e.layerX - self.canvas.offsetLeft;
        var y = e.offsetY || e.layerY - self.canvas.offsetTop;
        var currentPoint = {
            x: (x / self.canvas.width),
            y: (y / self.canvas.height)
        };

        // if the starting point haven't been set yet, set it and end
        if (!startingPoint)
        {
            startingPoint = currentPoint;
            return;
        }

        // reset canvas using saved canvas
        self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.context.drawImage(self._getLayer(savedCanvasKey), 0, 0);

        // draw a line from the starting point to the current point
        self._drawPointsOnCanvas(self.canvas, [startingPoint, currentPoint], self.context.strokeStyle, 2);

        var distance = self.calculateDistance(startingPoint, currentPoint);
        self.distanceCallbackFunction(distance);
    }

    function draw(e)
    {
        if (!self.isLeftMouseButtonActive || self.isRightMouseButtonActive) return;

        // cross-browser canvas coordinates
        var x = e.offsetX || e.layerX - self.canvas.offsetLeft;
        var y = e.offsetY || e.layerY - self.canvas.offsetTop;

        points.push(
        {
            x: (x / self.canvas.width),
            y: (y / self.canvas.height)
        });

        // only draw points if locally visible
        if (self.localVisible)
        {
            self._drawPointsOnCanvas(self.canvas, points, self.getColor(), self.context.lineWidth);
            self._notifyListeners(self.changeListeners,
                self._createMsg(self.MSG_TYPE_SNIPPET,
                {
                    points: points,
                    color: self.getColor(),
                    lineWidth: self.context.lineWidth
                }));
        }
    }

    function mouseDownHandler(e)
    {
        // only activate one button at a time
        if (e.button === LEFT_BUTTON)
        {
            if (self.isRightMouseButtonActive) return;

            self.isLeftMouseButtonActive = true;
            self.isRightMouseButtonActive = false;
        }
        else if (e.button === RIGHT_BUTTON)
        {
            if (self.isLeftMouseButtonActive) return;
            self.isLeftMouseButtonActive = false;
            self.isRightMouseButtonActive = true;

            // cross-browser canvas coordinates
            var x = e.offsetX || e.layerX - self.canvas.offsetLeft;
            var y = e.offsetY || e.layerY - self.canvas.offsetTop;
            startingPoint = {
                x: (x / self.canvas.width),
                y: (y / self.canvas.height)
            };

            // save the current canvas
            var savedCanvas = self._getLayer(savedCanvasKey);
            var savedContext = savedCanvas.getContext('2d');
            savedContext.clearRect(0, 0, savedCanvas.width, savedCanvas.height);
            savedContext.drawImage(self.canvas, 0, 0);
        }
    }

    function mouseUpHandler(e)
    {
        if (self.isLeftMouseButtonActive && e.button == LEFT_BUTTON)
        {
            self.isLeftMouseButtonActive = false;

            self.localPoints.push(
            {
                points: points,
                color: self.getColor(),
                lineWidth: self.context.lineWidth
            });
            // empty the array
            points = [];
        }

        if (self.isRightMouseButtonActive && e.button == RIGHT_BUTTON)
        {
            self.isRightMouseButtonActive = false;

            // put the canvas back
            self.removeLayer(savedCanvasKey);
            self.redrawLayers();
            self.distanceCallbackFunction(null);
        }
    }
    self._resize();
};