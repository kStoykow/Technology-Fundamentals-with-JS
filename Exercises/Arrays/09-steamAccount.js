function games(data) {
    let acc = data[0].split(' ');

    const commandsMap = {
        "Play!": (arr, e) => arr,
        'Install': (arr, e) => {
            if (!arr.includes(e)) {
                arr.push(e);
            }
            return arr;
        },
        'Uninstall': (arr, e) => {
            if (arr.includes(e)) {
                arr.splice(arr.indexOf(e), 1);
            }
            return arr;
        },
        'Update': (arr, e) => {
            if (arr.includes(e)) {
                arr.push(arr.splice(arr.indexOf(e), 1));
            }
            return arr;
        },
        'Expansion': (arr, e) => {
            let [game, exp] = e.split('-');
            if (arr.includes(game)) {
                arr.splice(arr.indexOf(game) + 1, 0, `${game}:${exp}`);
            }
            return arr;
        }
    }

    for (let i = 1; i < data.length; i++) {
        let currentElement = data[i].split(' ');
        let command = currentElement[0];
        let elem = currentElement[1];
        commandsMap[command](acc, elem);
    }

    return acc.join(' ');
}

console.log(games(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Play!',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']));