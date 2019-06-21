function replacing(word, checkFor, wordToMatch) {
    let checked = word.replace('_', checkFor);

    if (checked === wordToMatch) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}