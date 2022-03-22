function solve(data) {
    let arr = data.shift().split('');
    const commandsMap = {
        'Move': (arr, [sequence] = arr) => {
            let str = arr.join('');
            return (str.substring(Number(sequence)) + str.substring(0, Number(sequence))).split('');
        },
        'Insert': (arr, [i, insert] = arr) => {
            arr.splice(Number(i), 0, insert);
            return arr;
        },
        'ChangeAll': (arr, [matcher, replacer] = arr) => arr.map(e => e == matcher ? e = replacer : e)
    }

    for (let e of data) {
        if (e == 'Decode' == true) {
            break;
        }
        let [command, ...rest] = e.split('|');
        arr = commandsMap[command](arr, rest);
    }

    return `The decrypted message is: ${arr.join('')}`;
}
console.log(solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]));