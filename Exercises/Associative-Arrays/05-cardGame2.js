function solve(input) {
    let type = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
        '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11,
        'Q': 12, 'K': 13, 'A': 14
    };

    let power = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    
    let playersCards = {};
    let result = {};

    for (const line of input) {
        let [name, hands] = line.split(': ');
        let handsArr = hands.split(', ');

        if (!playersCards.hasOwnProperty(name)) {
            playersCards[name] = handsArr;
        } else {
            let currCards = playersCards[name].concat(handsArr);
            playersCards[name] = currCards;
        }
    }

    for (const name in playersCards) {
        let sum = 0;
        let set = new Set(playersCards[name]);
        let cardsArr = Array.from(set);

        for (const card of cardsArr) {
            if (card.length == 2) {
                let [cardType, cardPower] = card.split('');
                sum += Number(type[cardType]) * Number(power[cardPower]);

            } else {
                let [cardType, middle, cardPower] = card.split('');
                let doubleDigit = cardType + middle;
                sum += Number(type[doubleDigit]) * Number(power[cardPower]);
            }
        }

        if (!result.hasOwnProperty(name)) {
            result[name] = sum;
        } else {
            result[name] += sum;
        }
    }

    for (const key in result) {
        console.log(`${key}: ${result[key]}`);  
    }
}
solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])