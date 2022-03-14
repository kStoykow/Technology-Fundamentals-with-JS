function solve(input) {
    let pattern = /\s[a-z0-9]+[\.\-_]?[a-z0-9]+?@[a-z]+([\.\-_][a-z]+)+/gi;
    let result = '';
    if (input.match(pattern) != null) {
        for (const e of input.match(pattern)) {
            result += `${e.trim()}\n`;
        }
    }
    return result;
}
console.log(solve('steve@invali.sd- and steve.parker@softuni.de.'));