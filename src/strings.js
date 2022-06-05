String.prototype.replaceArray = function(find, replace) {
    var replaceString = this;
    var regex;
    for (var i = 0; i < find.length; i++) {
        regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace);
    }
    return replaceString;
};

hyplib.stringToAB = function(str) { // converts to base64 array buffer
    return new Uint8Array(str.split('')
        .map(c => c.charCodeAt(0))).buffer;
}

hyplib.ABToString = function(str) { // converts from base64 array buffer
    return new Uint8Array(ab).reduce((p, c) =>
        p + String.fromCharCode(c), '');
}

hyplib.randomString = function(l, charset) { // generates string of x length, if charset is passed override
    var result = '';
    var characters = charset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < l; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

String.prototype.truncate = function(length, suffix) { // truncates string to specific length. if suffix provided, remove the last x characters to make suffix fit within string length 
    if (this.length > length) {
        if (suffix) {
            return this.substring(0, length - suffix.length) + suffix;
        } else {
            return this.substring(0, length)
        }
    }
    return this;
};