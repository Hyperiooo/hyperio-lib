var path = require('path');
var fs = require('fs');
var uglify = require("uglify-js");
const { dirname } = require('path');

var srcDir = path.join(__dirname, "src");
var code = {};

var final = "";

fs.readdir(srcDir, function(err, files) {
    if (err) {
        console.log(err)
        return
    }
    console.log(files)
    files.sort(function(a, b) {
        return a < b ? -1 : 1;
    }).forEach(function(file, key) {
        console.log(file)
        fs.readFile(path.join(srcDir, "\\" + file), 'utf-8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            code[file] = data;
        })
    });


})

setTimeout(() => {
    const ordered = Object.keys(code).sort().reduce(
        (obj, key) => {
            obj[key] = code[key];
            return obj;
        }, {}
    );
    console.log(ordered)

    var result = uglify.minify(ordered, {
        keep_fargs: true,
        keep_fnames: true,
        mangle: false
    });

    fs.writeFile('dist/hyperio-lib.min.js', result.code, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Script generated and saved:", 'dist/hyperio-lib.min.js');
        }
    });
}, 100);