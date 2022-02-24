function solve(input) {
    let lookingFor = input.shift().split(' ');
    let wordCounter = {};

    for (const prop of lookingFor) {
        wordCounter[prop] = 0;
    }

    input.forEach(word => {
        if (wordCounter.hasOwnProperty(word)) {
            wordCounter[word] += 1;
        }
    });

    Object
        .entries(wordCounter)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} - ${value}`));
}
console.log(solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
);