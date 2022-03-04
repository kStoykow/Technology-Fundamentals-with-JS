function objGenerator(arr) {
    let obj = { 'vip': [], 'regular': [] };
    for (const e of arr) {
        if (e != "PARTY") {
            if (isNaN(e[0]) == false) {
                obj['vip'].push(e);
            } else {
                obj['regular'].push(e);
            }
        } else {
            break;
        }
    }
    return obj;
}
function mapGenerator(arr) {
    let map = new Map();
    map.set('vip', []);
    map.set('regular', []);
    for (const e of arr) {
        if (e != 'PARTY') {
            if (isNaN(e[0]) == false) {
                map.set('vip', map.get('vip').concat(e));
            } else {
                map.set('regular', map.get('regular').concat(e));
            }
        } else {
            break;
        }
    }
    return map;
}

function objManipulator(obj, arr) {
    for (const e of arr.slice(arr.indexOf('PARTY') + 1)) {
        if (isNaN(e[0]) == false) {
            obj['vip'].splice(obj['vip'].indexOf(e), 1);
        } else {
            obj['regular'].splice(obj['regular'].indexOf(e), 1);
        }
    }
    return obj;
}
function mapManipulator(map, arr) {
    for (const e of arr.slice(arr.indexOf("PARTY") + 1)) {
        if (isNaN(e[0]) == false) {
            let vips = map.get('vip')
            vips.splice(vips.indexOf(e), 1)
            map.set('vip', vips);
        } else {
            let reg = map.get('regular');
            reg.splice(reg.indexOf(e), 1);
            map.set('regular', reg);
        }
    }
    return map;
}

function outputObjParse(obj) {
    let r = `${Object.values(obj).reduce((a, b) => a + b.length, 0)}\n`;
    for (const key in obj) {
        r += `${obj[key].join('\n')}\n`;

    }
    return r;
}
function outputMapParse(map) {
    let r = `${Array.from(map.values()).reduce((a, b) => a + b.length, 0)}\n`;
    for (const kvp of map) {
        r += `${kvp[1].join('\n')}\n`;
    }
    return r;
}


function guestListTracker(data, generator, manipulator, output) {
    return output(manipulator(generator(data), data));
}
function guestListMapTracker(arr, generator, manipulator, output) {
    return output(manipulator(generator(arr), arr));
}

console.log(guestListTracker(
    ['7IK9Yo0h',
        '9NoBUajQ', '9NoB123Q', '9Nob23jQ',
        'Ce8vwPmE', '7IKbso0h', '7IK2Yo0h',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'],
    objGenerator, objManipulator, outputObjParse
));
console.log();
console.log(guestListMapTracker(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'],
    mapGenerator, mapManipulator, outputMapParse
));