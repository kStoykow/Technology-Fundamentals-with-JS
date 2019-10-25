function solve(text) {
    const isUpperCase = (symbol) => {
        return symbol == symbol.toUpperCase();
    };

    let result = [];
    let currWord = text[0];

    for (let char = 1; char < text.length; char++) {
        if (isUpperCase(text[char])) {
            result.push(currWord);
            currWord = text[char];
        } else {
            currWord += text[char];
        }
    }

    result.push(currWord);
    console.log(result.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')