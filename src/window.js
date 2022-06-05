hyplib.w = class {

    static getUrl() {
        return window.location.href;
    }
    static setUrl(s) {
        var x = this.getUrl();
        window.location.href = s;
        return x;
    }
    static getHash() {
        if (window.location.hash) {
            return window.location.hash.substr(1);
        }
        return false;
    }
    static getParam(s) {
        var x = new URLSearchParams(window.location.search);
        if (x.has(s)) {
            return x.get(s);
        }
        return false;
    }
}