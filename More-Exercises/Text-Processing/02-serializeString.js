function solve(input) {
    input = input[0];

    let output = {};
    let startOf = 0;
    for (const char of input) {
        let indexOf = input.indexOf(char, startOf);

        if (!output.hasOwnProperty(char)) {
            output[char] = [];
            output[char].push(indexOf);

        } else {
            output[char].push(indexOf);
        }

        startOf = indexOf + 1;
    }

    for (const key in output) {
        console.log(`${key}:${output[key].join('/')}`);
    }
}
solve(['abababa'])