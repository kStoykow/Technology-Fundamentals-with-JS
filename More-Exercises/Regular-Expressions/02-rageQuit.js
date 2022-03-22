function solve(input) {
    let delimitePattern = /[\D]+[\d]+/g;
    let wordPattern = /[\D]+/g;
    let countPattern = /[\d]+/g;
    let text = input[0].matchAll(delimitePattern);
    let word = '';

    for (const message of text) {
        let currMsg = message[0].match(wordPattern)[0].repeat(message[0].match(countPattern)).toUpperCase();
        word += currMsg;
    }
    let set = new Set(word);
    return `Unique symbols used: ${set.size}\n${word}`;
}
console.log(solve(["aSd2&5s@1"]));