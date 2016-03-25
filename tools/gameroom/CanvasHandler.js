function CanvasHandler(canvasDOM)
{
    this.canvas = canvasDOM;
    this.context = canvasDOM.getContext('2d');
    this.context.lineWidth = '2';
    this.widthAspect = 16;
    this.heightAspect = 9;
    this.scale = 1.0;
    this.aspectRatio = this.widthAspect / this.heightAspect;
    this.borderBufferSize = 8;

    // stores all the actions the local user does
    this.localPoints = []; // double array, contains every array of points the local user applied to the canvas
    this.localVisible = true;

    this.drawListeners = [];
    this.layers = {}; // hashmap of string -> layers, which are arrays of canvases
    this.gridLines = false;
}

CanvasHandler.prototype._resize = function()
{
    // dont allow height of canvas to be more than the window minus the header and bottom buttons
    var maxHeight = window.innerHeight - (150 + 75);
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
 * Adds a listener that is notified whenever the local user draws to their layer.
 */
CanvasHandler.prototype.addDrawListener = function(listener)
{
    this.drawListeners.push(listener);
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

CanvasHandler.prototype.getLocalPoints = function()
{
    return this.localPoints;
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
    self._notifyListeners(self.drawListeners,
    {
        clear: true
    });
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
    if (this.gridLines)
    {
        this.redrawLayers();
    }
};

CanvasHandler.prototype.toggleGridLines = function()
{
    this.gridLines = !this.gridLines;
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
            }], this.context.strokeStyle, 1);
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
            }], this.context.strokeStyle, 1);
        }
    }
};

/**
 * Redraws all the layers and all the local drawing actions.
 */
CanvasHandler.prototype.redrawLayers = function()
{
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGridLines();
    for (var layerId in this.layers)
    {
        if (this.layers.hasOwnProperty(layerId) && this.layers[layerId].isVisible)
        {
            this.context.drawImage(this.layers[layerId], 0, 0);
        }
    }

    if (this.localVisible)
    {
        for (var i = 0; i < this.localPoints.length; i++)
        {
            var snippet = this.localPoints[i];
            this._drawPointsOnCanvas(this.canvas, snippet, snippet.color, snippet.lineWidth);
        }
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
 * Draws the points with the given color on the layer that belongs to the peerId.
 */
CanvasHandler.prototype.drawLayerPoints = function(layerId, points, color, lineWidth)
{
    var layer = this._getLayer(layerId);
    this._drawPointsOnCanvas(layer, points, color, lineWidth);

    if (layer.isVisible)
    {
        // copy the layer onto the view canvas
        this.context.drawImage(layer, 0, 0);
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

CanvasHandler.prototype.init = function()
{
    var self = this;
    this.canvas.addEventListener('mousedown', startDraw, false);
    this.canvas.addEventListener('mousemove', draw, false);
    this.canvas.addEventListener('mouseup', endDraw, false);

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

    // create a flag
    var isActive = false;

    // array to collect coordinates
    var points = [];

    function draw(e)
    {
        if (!isActive) return;

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
            self._notifyListeners(self.drawListeners,
            {
                points: points,
                color: self.getColor(),
                lineWidth: self.context.lineWidth
            });

            // attach color and line width for later reference
            points.color = self.getColor();
            points.lineWidth = self.context.lineWidth;
            self.localPoints.push(points);
        }
    }

    function startDraw(e)
    {
        isActive = true;
    }

    function endDraw(e)
    {
        isActive = false;

        // empty the array
        points = [];
    }
    self._resize();
};