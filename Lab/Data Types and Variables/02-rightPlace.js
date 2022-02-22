function replacing(word, checkFor, result) {
    const isMatch = {
        true: 'Matched',
        false: 'Not Matched'
    }
    return isMatch[word.replace('_', checkFor) === result];
}
console.log(replacing('a_d', 'd', 'add'));