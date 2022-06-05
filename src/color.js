hyplib.hexToRGB = function(hex) {
    hex = hex.replace("#", '')
    if (hex.length == 3) {
        hex += "f"
    } else if (hex.length == 6) {
        hex += "ff"
    }
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b, a) {
        return r + r + g + g + b + b + (a || "ff") + (a || "ff");
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
        parseInt(result[4], 16)
    ] : null;
}

hyplib.HSLToHSV = function(hsla) {
    var h = hsla[0]
    var s = hsla[1]
    var l = hsla[2]
    var a = hsla[3]
    const hsv1 = s * (l < 50 ? l : 100 - l) / 100;
    const hsvS = hsv1 === 0 ? 0 : 2 * hsv1 / (l + hsv1) * 100;
    const hsvV = l + hsv1;
    return [h, hsvS, hsvV, a];
}

hyplib.HSVToHSL = function(hsva) {
    var h = hsva[0]
    var s = hsva[1] / 100
    var v = hsva[2] / 100
    var a = hsva[3]
    var l = (2 - s) * v / 2;

    if (l != 0) {
        if (l == 1) {
            s = 0
        } else if (l < 0.5) {
            s = s * v / (l * 2)
        } else {
            s = s * v / (2 - l * 2)
        }
    }

    return [h, s * 100, l * 100, a]
}


hyplib.RGBToHSV = function(rgba) {
    var r = rgba[0]
    var g = rgba[1]
    var b = rgba[2]
    var a = rgba[3]
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
        diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return [
        Math.round(h * 360),
        percentRoundFn(s * 100),
        percentRoundFn(v * 100),
        a / 255 * 100
    ];
}

hyplib.HSLToRGB = function(hsla) {
    var h = hsla[0] / 360
    var s = hsla[1] / 100
    var l = hsla[2] / 100
    var a = hsla[3]
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), Math.round(a / 100 * 255)];
}

hyplib.rgbToHex = function(r, g, b, a) {
    if (a) return intToHex(r) + intToHex(g) + intToHex(b) + intToHex(a);
    else if (!a) return intToHex(r) + intToHex(g) + intToHex(b);
}

hyplib.intToHex = function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

hyplib.isValidHex = function(color) {
    if (!color || typeof color !== 'string') return false;

    if (color.substring(0, 1) === '#') color = color.substring(1);

    switch (color.length) {
        case 3:
            return /^[0-9A-F]{3}$/i.test(color);
        case 4:
            return /^[0-9A-F]{4}$/i.test(color);
        case 6:
            return /^[0-9A-F]{6}$/i.test(color);
        case 8:
            return /^[0-9A-F]{8}$/i.test(color);
        default:
            return false;
    }

    return false;
}