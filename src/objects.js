hyplib.sortObjectByKey = function(u) {
    return Object.keys(u).sort().reduce(
        (obj, key) => {
            obj[key] = u[key];
            return obj;
        }, {}
    );
}