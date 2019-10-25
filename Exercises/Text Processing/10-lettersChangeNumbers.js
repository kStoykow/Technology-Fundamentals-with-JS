function solve(input) {
    let alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
        n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    };

    let clearInput = input.split(' ').filter(e => e.length);
    let totalSum = 0;

    for (const currProblem of clearInput) {
        let firstChar = currProblem[0];
        let lastChar = currProblem[currProblem.length - 1];
        let number = Number(currProblem.substr(1, currProblem.length - 2));
        let currSum = 0;

        if (firstChar == firstChar.toUpperCase()) {
            firstChar = firstChar.toLowerCase();
            currSum += (number / alphabet[firstChar]);
        } else {
            currSum += number * alphabet[firstChar];
        }

        if (lastChar == lastChar.toUpperCase()) {
            lastChar = lastChar.toLowerCase();
            currSum -= alphabet[lastChar];
        } else {
            currSum += alphabet[lastChar];
        }

        totalSum += currSum;
    }

    console.log(totalSum.toFixed(2));
}
solve('P34562Z q2576f   H456z')