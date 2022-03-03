function objectEntriesGenerator(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [k, v] = b.split(' ');
        a[k] = v;
        return a;
    }, {}));
}
function mapGenerator(arr) {
    return arr.reduce((a, b) => {
        let [k, v] = b.split(' ');
        a.set(k, v);
        return a;
    }, new Map());
}
function outputFormatter(arrOfTuples) {
    return Array.from(arrOfTuples).map(([k, v] = e) => `${k} -> ${v}`).join('\n');
}

function phoneBookHandlerObj(data, generator, output) {
    console.log(generator(data));
    return output(generator(data));
}

function phoneBookHandlerMap(data, generator, output) {
    return output(generator(data));
}

console.log(
    phoneBookHandlerObj(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'], objectEntriesGenerator, outputFormatter)
);
console.log();
console.log(
    phoneBookHandlerMap(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'], mapGenerator, outputFormatter)
);