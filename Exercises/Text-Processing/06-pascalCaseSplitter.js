function solve(str) {
    let words = [];
    let word = '';

    for (let e of str) {
        if (e == e.toLocaleUpperCase() && word !== '') {
            words.push(word);
            word = e;
        } else {
            word += e;
        }
    }
    words.push(word);
    return words.join(', ');
}
console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));