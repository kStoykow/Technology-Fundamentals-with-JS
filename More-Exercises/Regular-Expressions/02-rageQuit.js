function solve(input) {
    let delimitePattern = /[\D]+[\d]+/g;
    let wordPattern = /[\D]+/g;
    let countPattern = /[\d]+/g;
    let text = input[0].match(delimitePattern);
    let result = '';

    for (const message of text) {
        let currMsg = message.match(wordPattern)[0].repeat(message.match(countPattern)).toUpperCase();
        result += currMsg;
    }

    let set = new Set(result);
    console.log(`Unique symbols used: ${set.size}`);
    console.log(result);
}
solve(["aSd2&5s@1"])