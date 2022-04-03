function solve(arr) {
    let n = Number(arr.shift());
    let pattern = /(!)(?<c>[A-Z][a-z]{3,})\1:\[(?<str>[a-zA-Z]{8,})\]/g;
    let r = '';

    function strParser(e) {
        let c = e.groups.c;
        let string = e.groups.str;
        return `${c}: ${string.split('').map(e => e.charCodeAt(0)).join(' ')}\n`;
    }

    const printMap = {
        true: (str, pattern) => {
            for (const e of str.matchAll(pattern)) {
                r += strParser(e);
            }
            return r;
        },

        false: (str, pattern) => r += 'The message is invalid\n',
    }

    for (let i = 0; i < n; i++) {
        r = printMap[Boolean(arr[i].match(pattern))](arr[i], pattern);
    }
    return r;
}
console.log(solve([
    "4",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]",
    "!Asddd!:[qwqweeqweet]"
]));