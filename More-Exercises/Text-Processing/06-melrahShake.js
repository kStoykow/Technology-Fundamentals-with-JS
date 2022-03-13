function solve(input) {
    let [str, pattern] = input;
    let r = '';

    while (str.indexOf(pattern) != str.lastIndexOf(pattern) && pattern.length > 0) {
        let first = str.indexOf(pattern);
        let last = str.lastIndexOf(pattern);

        str = str.substring(0, first) + str.substring(first + pattern.length, last) + str.substring(last + pattern.length, str.length);
        pattern = pattern.substring(0, pattern.length / 2) + pattern.substring(pattern.length / 2 + 1);

        r += 'Shaked it.\n';
    }
    r += `No shake.\n${str}`;
    return r;
}
console.log(solve(['astalsavisa bssaabysta',
    'sta']));