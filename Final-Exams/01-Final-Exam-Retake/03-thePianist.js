function solve(arr) {
    let count = Number(arr[0]);
    function addLogger(piece, composer, key) { return console.log(`${piece} by ${composer} in ${key} added to the collection!`); }
    function addLoggerFail(piece) { return console.log(`${piece} is already in the collection!`); }
    function removeLogger(piece) { return console.log(`Successfully removed ${piece}!`); }
    function removeLoggerFail(piece) { return console.log(`Invalid operation! ${piece} does not exist in the collection.`); }
    function changeKeyLogger(piece, newKey) { return console.log(`Changed the key of ${piece} to ${newKey}!`); }
    function changeKeyLoggerFail(piece) { return console.log(`Invalid operation! ${piece} does not exist in the collection.`); }
    const commandsMap = {
        'Add': (songs, [piece, composer, key] = arr) => {
            let currSong = songs.find(e => e.piece == piece);
            if (currSong !== undefined) {
                addLoggerFail(piece);
            } else {
                songs.push({ piece, composer, key });
                addLogger(piece, composer, key);
            }
            return songs;
        },
        'Remove': (songs, [piece] = arr) => {
            let index = songs.findIndex(el => el.piece == piece);
            if (index !== -1) {
                songs.splice(index, 1);
                removeLogger(piece);
            } else {
                removeLoggerFail(piece);
            }
            return songs;
        },
        'ChangeKey': (songs, [piece, newKey] = arr) => {
            let currSong = songs.find(e => e.piece == piece);
            if (currSong !== undefined) {
                currSong['key'] = newKey;
                changeKeyLogger(piece, newKey);
            } else {
                changeKeyLoggerFail(piece);
            }
            return songs;
        },
    }
    function outputParse(arr) {
        let r = '';
        for (const e of arr) {
            r += `${e.piece} -> Composer: ${e.composer}, Key: ${e.key}\n`;
        }
        return r;
    }
    function parseSongs(arr) {
        let songs = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            let [piece, composer, key] = arr[i].split('|');
            songs[i] = { piece, composer, key };
        }
        return songs;
    }

    let songs = parseSongs(arr.slice(1, count + 1));

    for (const token of arr.slice(count + 1)) {
        if (token == 'Stop' == true) {
            return outputParse(songs);
        }

        let [command, ...rest] = token.split('|');
        commandsMap[command](songs, rest);
    }
}
console.log(solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]));