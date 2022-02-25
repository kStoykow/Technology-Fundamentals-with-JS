function solve(word, input) {
    let text = input.split(' ');

    for (const currWord of text) {
        if (word.toLowerCase() == currWord.toLowerCase()) {
            console.log(word);
            return;
        } 
    }
    
    console.log(`${word} not found!`);  
}
solve('javascript',
    'JavaScript is the best programming language'
)