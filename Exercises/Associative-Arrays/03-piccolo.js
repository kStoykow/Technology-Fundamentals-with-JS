function objGenerator(data) {
    return data.reduce((a, b) => {
        let [dir, x] = b.split(', ');
        if (dir == "IN") {
            a[x] = 0;
        } else {
            delete a[x];
        }
        return a;
    }, {});
}
function mapGenerator(data) {
    return data.reduce((a, b) => {
        let [dir, x] = b.split(', ');
        if (dir == "IN") {
            a.set(x, 0)
        } else {
            a.delete(x)
        }
        return a;
    }, new Map());
}


const sortByNumber = (a, b) => a.localeCompare(b)
function outputParse(keys) {
    if (keys.length == 0) {
        return 'Parking Lot is Empty';
    }
    return keys;
}


function objParkingTracker(data, generator, sort, output) {
    let parkingLot = generator(data);
    return Object.keys(parkingLot)
        .sort(sort)
        .map(output)
        .join('\n');
}
function mapParkingTracker(data, generator, sort, output) {
    let parkingLot = generator(data);
    return Array.from(parkingLot.keys())
        .sort(sort)
        .map(output)
        .join('\n');
}

console.log(objParkingTracker(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'],
    objGenerator, sortByNumber, outputParse
));
console.log();
console.log(mapParkingTracker(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'],
    mapGenerator, sortByNumber, outputParse
));