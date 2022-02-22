function solve(arr) {
    let list = arr.shift().split(', ');
    let n = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(', ');

        if (token[0] == 'Add') {
            if (!list.includes(token[1])) {
                list.push(token[1]);
                console.log('Card successfully added');
            } else {
                console.log('Card is already in the deck');
            }

        } else if (token[0] == 'Remove') {
            if (list.includes(token[1])) {
                list.splice(list.indexOf(token[1]), 1);
                console.log('Card successfully removed');
            } else {
                console.log('Card not found');
            }

        } else if (token[0] == 'Remove At') {
            let i = Number(token[1]);
            if (i >= 0 && i < list.length) {
                list.splice(i, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Index out of range');
            }

        } else if (token[0] == 'Insert') {
            let i = Number(token[1]);
            let card = token[2];

            if (i >= 0 && i < list.length) {
                if (!list.includes(card)) {
                    list.splice(i, 0, card);
                    console.log('Card successfully added');
                } else {
                    console.log('Card is already added');
                }
            } else {
                console.log('Index out of range');
            }
        }
    }

    console.log(`${list.join(', ')}`);
}
console.log(solve((["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])));
console.log('---');

console.log(solve((["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"])));
console.log('---');

console.log(solve((["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])));