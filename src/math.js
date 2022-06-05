hyplib.clamp = function(num, min, max) {
    return Math.min(Math.max(num, min), max || Number.MAX_SAFE_INTEGER);
}

hyplib.lerp = function(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}

hyplib.distance = function(x1, x2, y1, y2) {
    return Math.hypot(x2 - x1, y2 - y1)
}

hyplib.isValidNum = function(str) {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}