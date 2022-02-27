function solve(input) {
    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let capitalsPattern = /(\$|\#|\%|\*|\&)[A-Z]+\1/g;
    let wordStarterPattern = /\d{2}:\d{2}/g;
    let capitals = firstPart.match(capitalsPattern);
    capitals = capitals[0].substr(1, capitals[0].length - 2);
    let lettersAndLength = secondPart.match(wordStarterPattern);

    let myMap = new Map();

    for (const letter of capitals) {
        myMap.set(letter, 0);
    }

    for (let currPair of lettersAndLength) {
        let [charCode, length] = currPair.split(':');
        let currChar = String.fromCharCode(charCode);
        let currLength = Number(length) + 1;

        if (myMap.has(currChar)) {
            myMap.set(currChar, currLength);
        }
    }

    let text = thirdPart.split(' ');

    for (const letter of capitals) {
        for (const word of text) {
            if (letter == word[0] && word.length == myMap.get(letter)) {
                console.log(word);
            }
        }
    }
}
solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])