function objEntriesGenerator(arr) {
    return Object.entries(arr.reduce((a, b) => {
        if (!a.hasOwnProperty(b)) {
            a[b] = 0;
        }
        a[b]++;
        return a;
    }, {}));
}
function mapEntriesGenerator(arr) {
    return Array.from(arr.reduce((a, b) => {
        if (!a.has(b)) {
            a.set(b, 0);
        }
        a.set(b, a.get(b) + 1);
        return a;
    }, new Map()));
}

function sortByCount(arrOfTuples) {
    return arrOfTuples.sort((a, b) => b[1] - a[1]);
}
function arrDeserializator(arr) {
    return arr.map(([k, v] = e) => `${k} -> ${v} times`).join('\n');

}


function objWordsCounter(data, generator, sort, output) {
    return output(sort(generator(data)));
}
function mapWordsCounter(data, generator, sort, output) {
    return output(sort(generator(data)));
}


console.log(mapWordsCounter(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"],
    objEntriesGenerator, sortByCount, arrDeserializator
));
console.log();
console.log(objWordsCounter(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"],
    mapEntriesGenerator, sortByCount, arrDeserializator
));