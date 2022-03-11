function solve(words, str) {
    let checkers = words.split(', ');
    const revealWord = e => e.match(/\*+/g) ? checkers.filter(el => el.length == e.length) : e;
    return str.split(' ')
        .map(revealWord)
        .join(' ');
}
console.log(solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
));