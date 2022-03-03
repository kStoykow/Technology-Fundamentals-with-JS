function objEntriesGenerator(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [k, v] = b.split(' ');
        if (!a.hasOwnProperty(k)) {
            a[k] = v;
        }
        return a;
    }, {}));
}
function mapGenerator(arr) {
    return arr.reduce((a, b) => {
        let [k, v] = b.split(' ');
        if (!a.has(k)) {
            a.set(k, v);
        }
        return a;
    }, new Map());
}
function deserializeArrToString(arr) {
    let obj = {};
    let result = '';
    for (const e of arr) {
        let [k, v] = e.split(' ');
        if (!obj.hasOwnProperty(k)) {
            result += `Scheduled for ${k}\n`;
        } else {
            result += `Conflict on ${k}!\n`;
        }
        obj[k] = v;
    }
    return result;
}
function outputFormatter(arrOfTuples, str) {
    str += Array.from(arrOfTuples).map(([k, v] = e) => `${k} -> ${v}`).join('\n');
    return str;
}
function meetingsHandlerObj(arr, generator, deserializator, output) {
    return output(generator(arr), deserializator(arr));
}
function meetingsHandlerMap(arr, mapGenerator, deserializator, output) {
    return output(mapGenerator(arr), deserializator(arr));
}

console.log(meetingsHandlerObj(
    ['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'],
    objEntriesGenerator, deserializeArrToString, outputFormatter
));
console.log();
console.log(meetingsHandlerMap(
    ['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'],
    mapGenerator, deserializeArrToString, outputFormatter
));