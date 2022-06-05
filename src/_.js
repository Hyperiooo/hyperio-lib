class hyplib {
    static say(s) {
        // simple alert
        alert(s);
    }
    static ask(s, d = "") {
        return prompt(s, d);
    }

    static get(s) {
        return document.querySelector(s);
    }
    static getAll(s) {
        return document.querySelectorAll(s);
    }
    static forAll(s, f) {
        document.querySelectorAll(s).forEach(f);
    }
    static eLambda(s) {
        return e => s(e.target);
    }
}

var h = hyplib;