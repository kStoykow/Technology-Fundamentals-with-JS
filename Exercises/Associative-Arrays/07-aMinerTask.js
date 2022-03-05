function solve(data) {
    let obj = {};
    for (let i = 0; i < data.length; i += 2) {
        if (!obj.hasOwnProperty(data[i])) {
            obj[data[i]] = 0;
        }
        obj[data[i]] += Number(data[i + 1]);
    }

    return Object.entries(obj)
        .map(([k, v] = e) => `${k} -> ${v}`)
        .join('\n');
}
console.log(solve([
    'Gold',
    '155',
    'Gold',
    '15',
    'Silver',
    '10',
    'Copper',
    '17'
]))