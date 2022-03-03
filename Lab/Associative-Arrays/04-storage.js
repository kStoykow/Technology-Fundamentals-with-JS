function objEntriesGenerator(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [k, v] = b.split(' ');
        if (!a.hasOwnProperty(k)) {
            a[k] = 0;
        }
        a[k] += Number(v);
        return a;
    }, {}));
}
function mapEntriesGenerator(arr) {
    return Array.from(arr.reduce((a, b) => {
        let [k, v] = b.split(' ');
        if (!a.has(k)) {
            a.set(k, 0)
        }
        a.set(k, a.get(k) + Number(v))
        return a;
    }, new Map()));
}
function outputDeserializator(arrOfTuples) {
    return arrOfTuples.map(([k, v] = e) => `${k} -> ${v}`).join('\n');
}


function objStorageHandler(data, generator, output) {
    return output(generator(data))
}
function mapStorageHandler(data, generator, output) {
    return output(generator(data))
}


console.log(objStorageHandler(
    ['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'],
    objEntriesGenerator, outputDeserializator
));
console.log();
console.log(
    mapStorageHandler(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'],
        mapEntriesGenerator, outputDeserializator
    ));