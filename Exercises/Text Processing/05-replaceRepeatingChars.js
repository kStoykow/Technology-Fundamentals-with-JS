function solve(input) {
    let result = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] !== input[i - 1]) {
            result = result.concat(input[i]);
        }
    }

    console.log(result);
}
solve('aaaaabbbbbcdddeeeedssaa')