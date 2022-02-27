function solve(input) {
    input.shift();
    let pattern = /(\*|\@)([A-z][a-z]{2,})\1: \[([A-Za-z]+)\]\|\[([A-Za-z]+)\]\|\[([A-Za-z]+)\]\|$/g;

    for (const line of input) {
        if (line.match(pattern)) {
            let validMessage = pattern.exec(line);
            let tag = validMessage[2];
            let messages = validMessage[3] + validMessage[4] + validMessage[5];
            let result = '';

            for (const char of messages) {
                result += char.charCodeAt(0) + ' ';
            }

            result = result.trim();
            console.log(`${tag}: ${result}`);

        } else {
            console.log('Valid message not found!');
        }
    }
}
solve([
    '3',
    '*Request*: [I]|[sss]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
])