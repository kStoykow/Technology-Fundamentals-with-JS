function solve(input) {
    input.shift();
    let pattern = /^(\$|\%)([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/g;

    for (const line of input) {
        if (line.match(pattern)) {
            let valid = pattern.exec(line);
            let tag = valid[2];
            let ascii = [valid[3], valid[4], valid[5]];
            let result = '';

            for (let char of ascii) {
                char = String.fromCharCode(Number(char));
                result += char;
            }

            console.log(`${tag}: ${result}`);
            
        } else {
            console.log('Valid message not found!');
        }
    }
}
solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|',
])