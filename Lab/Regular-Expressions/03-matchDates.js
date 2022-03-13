function solve(input) {
    let validDate = /\b\d{2}(.|-|\/)[A-Z][a-z]{2}\1\d{4}/g;
    let matches = input.match(validDate);
    let result = '';

    for (const date of matches) {
        let delimiter = date[2];
        let [d, m, y] = date.split(delimiter);
        result += `Day: ${d}, Month: ${m}, Year: ${y}\n`;
    }
    return result;
}

function solve(input) {
    let validDate = /\b\d{2}(.|-|\/)[A-Z][a-z]{2}\1\d{4}/g;
    let matches = input.matchAll(validDate);
    let r = '';
    for (const date of matches) {
        let [d, m, y] = date[0].split(date[1]);
        r += `Day: ${d}, Month: ${m}, Year: ${y}\n`;
    }
    return r;
}
console.log(solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"));