function solve(str) {
    let regex = new RegExp(/#[a-zA-Z]+/, 'g');
    let special = str.match(regex);
    return special.map(e => e.substring(1)).join('\n');
}
console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));