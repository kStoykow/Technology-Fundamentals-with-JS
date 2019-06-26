function games(input) {
    let accountGames = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let currentElement = input[i].split(' ');
        let command = currentElement[0];
        let newGame = currentElement[1];

        if (command === 'Play!') {
            break;

        } else if (command === 'Install') {
            if (!accountGames.includes(newGame)) {
                accountGames.push(newGame);
            }

        } else if (command === 'Uninstall') {
            for (let j = 0; j < accountGames.length; j++) {
                if (accountGames[j] === newGame) {
                    accountGames.splice(j, 1);
                }
            }

        } else if (command === 'Update') {
            for (let l = 0; l < accountGames.length; l++) {
                if (accountGames[l] === newGame) {
                    let updatedGame = newGame;
                    accountGames.splice(l, 1);
                    accountGames.push(updatedGame);
                }
            }

        } else {
            let expansion = newGame.split('-');
            for (let p = 0; p < accountGames.length; p++) {
                if (accountGames[p] === expansion[0]) {
                    let expandedGame = expansion.join(':');
                    accountGames.splice(p + 1, 0, expandedGame);
                }
            }
        }
    }

    console.log(accountGames.join(' '));
} 