function solve(str, search) {
    return str.split(' ').filter(e => e == search).length;
}
console.log(solve("This is a word and it also is a sentence",
    "is"));