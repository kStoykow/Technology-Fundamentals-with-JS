function solve(words, text) {
    let toFind = words.split(', ');
    for (const word of toFind) {
        if (text.includes('*')) {
            text = text.replace('*'.repeat(word.length), word);
        }
    }

    console.log(text);
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)