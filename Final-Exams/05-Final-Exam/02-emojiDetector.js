function solve(input) {
    let emojies = input[0].match(/(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g);
    let x = input[0].match(/\d/g).map(Number).reduce((a, b) => a * b);
    let coolEmojies = [];
    let r = `Cool threshold: ${x}\n`;

    if (emojies != null) {
        emojies.map(e => {
            let sum = e.match(/\w+/)[0].split('').reduce((a, b) => a + b.charCodeAt(0), 0);
            if (sum > x) {
                coolEmojies.push(e);
            }
            return e;
        });
    }

    r += `${emojies.length} emojis found in the text. The cool ones are:\n${coolEmojies.join('\n')}`;
    return r;
}
console.log(solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));