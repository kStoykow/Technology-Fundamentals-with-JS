function solve(input) {
    const alphabetMap = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
        n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    };
    const firstCharMath = {
        true: (char, sum, n, map) => {
            char = char.toLowerCase();
            sum += (n / map[char]);
            return sum;
        },
        false: (char, sum, n, map) => {
            sum += n * map[char];
            return sum;
        }
    }
    const lastCharMath = {
        true: (char, sum, map) => {
            char = char.toLowerCase();
            sum -= map[char];
            return sum;
        },
        false: (char, sum, map) => {
            sum += map[char];
            return sum;
        }
    }
    let arr = input.split(' ').filter(e => e.length);

    return arr.reduce((a, b) => {
        let firstChar = b[0];
        let lastChar = b[b.length - 1];
        let number = Number(b.substr(1, b.length - 2));
        let currSum = 0;
        currSum = firstCharMath[firstChar == firstChar.toUpperCase()](firstChar, currSum, number, alphabetMap);
        currSum = lastCharMath[lastChar == lastChar.toUpperCase()](lastChar, currSum, alphabetMap);

        a += currSum;
        return a;
    }, 0)
        .toFixed(2);

}
console.log(solve('P34562Z q2576f   H456z'));