hyplib.log = function() {
    // console log
    return Function.prototype.bind.call(console.log, console);
}();
hyplib.dir = function() {
    // console log - json format
    return Function.prototype.bind.call(console.dir, console);
}();
hyplib.xml = function() {
    // console log - xml format
    return Function.prototype.bind.call(console.dirxml, console);
}();
hyplib.warn = function() {
    // console warn
    return Function.prototype.bind.call(console.warn, console);
}();
hyplib.err = function() {
    // console error
    return Function.prototype.bind.call(console.error, console);
}();
hyplib.clear = function() {
    // clears console
    return Function.prototype.bind.call(console.clear, console);
}();
hyplib.tStart = function() {
    // starts timing console
    return Function.prototype.bind.call(console.time, console);
}();
hyplib.tEnd = function() {
    // ends timing console
    return Function.prototype.bind.call(console.timeEnd, console);
}();
hyplib.tLog = function() {
    // logs value of a timer to console
    return Function.prototype.bind.call(console.timeLog, console);
}();
hyplib.table = function() {
    // console table - better way to represent arrays/json
    return Function.prototype.bind.call(console.table, console);
}();
hyplib.count = function() {
    // starts a new console count
    return Function.prototype.bind.call(console.count, console);
}();
hyplib.cReset = function() {
    // resets a console count
    return Function.prototype.bind.call(console.countReset, console);
}();
hyplib.gStart = function() {
    // starts console group
    return Function.prototype.bind.call(console.group, console);
}();
hyplib.gCollapsed = function() {
    // starts collapsed console group
    return Function.prototype.bind.call(console.groupCollapsed, console);
}();
hyplib.gEnd = function() {
    // ends console group
    return Function.prototype.bind.call(console.groupEnd, console);
}();
hyplib.debug = function() {
    // outputs a message to console with log level "debug"
    return Function.prototype.bind.call(console.debug, console);
}();
hyplib.pStart = function() {
    // starts browser profiler
    return Function.prototype.bind.call(console.profile, console);
}();
hyplib.pEnd = function() {
    // ends browser profiler
    return Function.prototype.bind.call(console.profileEnd, console);
}();
hyplib.trace = function() {
    // outputs stack trace
    return Function.prototype.bind.call(console.trace, console);
}();
hyplib.assert = function() {
    // if assertion (first param) is false, logs second param as an error
    return Function.prototype.bind.call(console.assert, console);
}();
hyplib.tStamp = function() {
    // labels time on timer
    return Function.prototype.bind.call(console.timeStamp, console);
}();