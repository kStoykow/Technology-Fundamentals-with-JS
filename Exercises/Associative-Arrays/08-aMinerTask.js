function solve(input) {
    let toPrint = {};
    for (let i = 0; i < input.length; i += 2) {
        if (!toPrint.hasOwnProperty(input[i])) {
            toPrint[input[i]] = Number(input[i + 1]);
        } else {
            toPrint[input[i]] += Number(input[i + 1]);
        }
    }

    for (const key in toPrint) {
        console.log(`${key} -> ${toPrint[key]}`);
    }
}
solve([
    'Gold',
    '155',
    'Gold',
    '15',
    'Silver',
    '10',
    'Copper',
    '17'
])