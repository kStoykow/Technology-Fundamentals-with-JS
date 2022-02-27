function solve(input) {
    let pattern = /(\#|\$|\%|\*|\&)([A-Za-z]+)\1=(\d+)!!(.+)$/g;

    for (const line of input) {
        if (line.match(pattern)) {
            let currMatch = pattern.exec(line);
            let name = currMatch[2];
            let length = Number(currMatch[3]);
            let hashCode = currMatch[4];
            let decrypted = '';

            if (hashCode.length == length) {
                for (const char of hashCode) {
                    let charCode = char.charCodeAt(0);
                    decrypted += String.fromCharCode(charCode + length);
                }
                
                console.log(`Coordinates found! ${name} -> ${decrypted}`);
                return;

            } else {
                console.log('Nothing found!');
            }

        } else {
            console.log('Nothing found!');
        }
    }
}
solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S',
])