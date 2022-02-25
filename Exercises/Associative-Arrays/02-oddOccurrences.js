function solve(input) {
    let words = input.split(' ').map(e => e.toLowerCase());
    let base = new Map();

    for (let word of words) {
        if (base.has(word)) {
            let quantity = base.get(word) + 1;
            base.set(word, quantity)
        } else {
            base.set(word, 1);
        }
    }

    let keys = [];

    for (const [key, value] of base) {
        if (value % 2 == 1) {
            keys.push(key);
        }
    }

    console.log(keys.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');