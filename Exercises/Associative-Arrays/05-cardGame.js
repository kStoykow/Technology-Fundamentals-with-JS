function solve(input) {
    let players = {};

    input.forEach(line => {
        let [key, value] = line.split(': ');
        let handArr = value.split(', ');
        if (!players.hasOwnProperty(key)) {
            players[key] = [];
        }

        for (const card of handArr) {
            if (!players[key].includes(card)) {
                players[key].push(card);
            }

        }
    });

    for (const player in players) {
        let score = 0;

        for (const pair of players[player]) {
            let left;
            let right;
            if (pair.length == 2) {
                left = pair[0];
                right = pair[1];

            } else {
                left = pair.slice(0, 2);
                right = pair[2];
            }

            let leftSymbol = parseInt(left);
            let leftOperand = 0;
            let rightOperand = 1;

            if (!isNaN(leftSymbol)) {
                leftOperand = Number(leftSymbol);

            } else {
                if (left == 'J') {
                    leftOperand = 11;
                } else if (left == 'Q') {
                    leftOperand = 12;
                } else if (left == 'K') {
                    leftOperand = 13;
                } else {
                    leftOperand = 14;
                }
            }

            if (right == 'S') {
                rightOperand = 4;
            } else if (right == 'H') {
                rightOperand = 3;
            } else if (right == 'D') {
                rightOperand = 2;
            } else {
                rightOperand = 1;
            }

            score += leftOperand * rightOperand;
        }

        console.log(`${player}: ${score}`);
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])