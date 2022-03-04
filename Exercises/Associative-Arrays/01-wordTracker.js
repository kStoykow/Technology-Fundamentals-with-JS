function objGenerator(str) {
    let arr = str.split(' ');
    return arr.reduce((a, b) => {
        a[b] = 0;
        return a;
    }, {});
}
function objWordsCounterTuples(obj, arr) {
    for (const e of arr) {
        if (obj.hasOwnProperty(e)) {
            obj[e]++;
        }
    }
    return Object.entries(obj);
}
function mapGenerator(str) {
    let arr = str.split(' ');
    return arr.reduce((a, b) => {
        a.set(b, 0);
        return a;
    }, new Map());
}
function mapWordsCounterTuples(map, arr) {
    for (const e of arr) {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1);
        }
    }
    return Array.from(map);
}


function sortByCount(arrOfTuples) {
    return arrOfTuples.sort((a, b) => b[1] - a[1]);
}
function outputParse(arrOfTuples) {
    return arrOfTuples.map(([k, v] = e) => `${k} - ${v}`).join('\n');
}


function objWordsTracker(data, generator, counter, sort, output) {
    return output(sort(counter(generator(data[0]), data.slice(1))));
}

function mapWordsTracker(data) {
    return outputParse(sortByCount(mapWordsCounterTuples(mapGenerator(data[0]), data.slice(1))));
}
console.log(objWordsTracker(
    ['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
        'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'],
    objGenerator, objWordsCounterTuples, sortByCount, outputParse
));
console.log();
console.log(mapWordsTracker(
    ['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
        'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'],
    mapGenerator, mapWordsCounterTuples, sortByCount, outputParse
));