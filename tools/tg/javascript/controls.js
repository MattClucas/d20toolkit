/* Controls */
function handleKeyPress(event) {
    var ch = getChar(event);
    if (cameraControl(camera, ch)) return;
}

function getChar(event) {
    if (event.which == null) {
        return String.fromCharCode(event.keyCode) // IE
    } else if (event.which != 0 && event.charCode != 0) {
        return String.fromCharCode(event.which) // the rest
    } else {
        return null // special key
    }
}

function cameraControl(c, ch) {
    switch (ch) {
        case ' ':
            pauseSun = !pauseSun;
            return true;
    }
    return false;
}
