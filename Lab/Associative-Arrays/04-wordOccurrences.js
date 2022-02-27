function solve(input) {
    let data = new Map();

    for (const word of input) {
        if (!data.has(word)) {
            data.set(word, 1);
        } else {
            count = data.get(word);
            data.set(word, count + 1);
        }
    }

    let sorted = [...data].sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])