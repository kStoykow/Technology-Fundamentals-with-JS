function solve(input) {
    let count = input.shift();
    let pattern = /(.{1,})>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/g;

    for (const line of input) {
        if (line.match(pattern)) {
            let valid = pattern.exec(line);
            let encrypted = valid[2] + valid[3] + valid[4] + valid[5];
            console.log(`Password: ${encrypted}`);

        } else {
            console.log('Try another password!');
        }
    }
}
solve(['3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'])