function objEntriesGenerator(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [k, v] = b.split(':');
        a[k] = v;
        return a;
    }, {}));
}
function mapEntriesGenerator(arr) {
    return Array.from(arr.reduce((a, b) => {
        let [k, v] = b.split(':');
        a.set(k, v);
        return a;
    }, new Map()));
}

function alphabeticalNameSort(arrOfTuples) {
    return arrOfTuples.sort((a, b) => a[0].localeCompare(b[0]))
}
function outputFormatter(arrOfTuples) {
    return arrOfTuples.map(([k, v] = x) => `${k} -> ${v}`).join('\n');
}


function objAdressBookHandler(data, generator, sort, format) {
    return format(sort(generator(data)));
}

function mapAdressBookHandler(data, generator, sort, format) {
    return format(sort(generator(data)));
}

console.log(objAdressBookHandler(
    ['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'],
    objEntriesGenerator, alphabeticalNameSort, outputFormatter
));
console.log();
console.log(mapAdressBookHandler(
    ['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'],
    mapEntriesGenerator, alphabeticalNameSort, outputFormatter
));