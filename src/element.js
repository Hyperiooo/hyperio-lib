Element.prototype.setOn = function(s) {
    // set element enabled, return whether it was changed
    var x = this.disabled;
    this.disabled = !s;
    return !s == x;
}
Element.prototype.isOn = function() {
    // set element enabled, return whether it was changed
    return !this.disabled;
}
Element.prototype.on = function(e, s) {
    // add event listener for e with function s
    return this.addEventListener(e, s);
}
Element.prototype.addClass = function(s) {
    // add class to element, return whether it was changed
    var x = this.classList.contains(s);
    this.classList.add(s);
    return !x;
}
Element.prototype.delClass = function(s) {
    // remove class from element, return whether it was changed
    var x = this.classList.contains(s);
    this.classList.remove(s);
    return x;
}
Element.prototype.hasClass = function(s) {
    // check if element has class
    return this.classList.contains(s);
}
Element.prototype.toggleClass = function(s) {
    return this.hasClass(s) ? this.delClass(s) : this.addClass(s);
}
Element.prototype.swapClass = function(s, n) {
    return this.classList.replace(a, b);
}