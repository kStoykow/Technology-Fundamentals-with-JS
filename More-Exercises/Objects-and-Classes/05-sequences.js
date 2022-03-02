function solve(data) {
    // function filterUniqueArrs(arr) {
    //     return arr.map(x => JSON.parse(x).sort((a, b) => b - a));
    // }

    let sorted = data.map(x => JSON.parse(x).sort((a, b) => b - a));
    let r = '';
    //  let uniques = new Set(sorted.map(x => JSON.stringify(x)));
    //  console.log([...uniques].map(x => JSON.parse(x)));
    let uniquesAsStr = [];
    for (let arr of sorted) {
        if (!uniquesAsStr.includes(JSON.stringify(arr))) {
            uniquesAsStr.push(JSON.stringify(arr))
        }
    }
    let uniquesAsArr = uniquesAsStr.map(e => JSON.parse(e)).sort((a, b) => a.length - b.length)

    for (const arr of uniquesAsArr) {
        r += `[${arr.join(', ')}]\n`;
    }
    return r;
}
console.log(solve([
    "[-3, -2, -1, 0, 2, 4, 3]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, -2, 2, -1, 0, 3]"]
));

// console.log(solve(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"]));