function solve(text, word) {
    let counter = 0;
    let splitted = text.split(' ');
    for (const currWord of splitted) {
        if (currWord == word) {
            counter++;
        }
    }

    console.log(counter);
}
solve("This is a word and it also is a sentence",
    "is")