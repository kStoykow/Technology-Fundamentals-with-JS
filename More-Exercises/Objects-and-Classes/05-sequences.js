function filterUniques(arr) {
    return [...new Set(arr.map(x => JSON.stringify(x)))]
        .map(e => JSON.parse(e)).sort((a, b) => a.length - b.length);
}
function outputFormatter(arr) {
    let result = '';
    for (const e of arr) {
        result += `[${e.join(', ')}]\n`;
    }
    return result;
}
function solve(data, filter, output) {
    let sorted = data.map(x => JSON.parse(x).sort((a, b) => b - a));
    let uniques = filter(sorted);

    return output(uniques);
}
console.log(solve([
    "[-3, -2, -1, 0, 2, 4, 3]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, -2, 2, -1, 0, 3]"], filterUniques, outputFormatter
));