function solve(arr) {
    let str = arr.shift();

    for (const e of arr) {
        if (e == 'Reveal' == true) {
            return `You have a new text message: ${str}`;
            break;
        }

        let [command, ...rest] = e.split(':|:');

        if (command == 'InsertSpace') {
            str = str.split('');
            str.splice(rest[0], 0, ' ');
            str = str.join('');
            console.log(str);
        } else if (command == 'Reverse') {
            if (str.includes(rest[0]) == true) {
                let cut = str.substring(str.indexOf(rest[0]), str.indexOf(rest[0]) + rest[0].length).split('').reverse().join('');
                str = str.substring(0, str.indexOf(rest[0])) + str.substring(str.indexOf(rest[0]) + rest[0].length) + cut;
                console.log(str);
            } else {
                console.log('error');
            }
        } else if (command == 'ChangeAll') {
            let [old, newStr] = rest;
            let pattern = new RegExp(`${old}`, 'g');
            str = str.replace(pattern, newStr);
            console.log(str);
        }
    }
}
console.log(solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]));