function solve(str, toReplace) {
    let regex = new RegExp(`${toReplace}`, 'g');
    return str.replace(regex, '*'.repeat(toReplace.length));
}
console.log(solve("A small sentance with some words", "small"));