function solve(data) {
    let arr = data[0].split('');
    const commandsMap = {
        'Add Stop': (arr, rest) => {
            let [i, add] = rest;
            i = Number(i);
            if (i >= 0 && i <= arr.length) {
                arr.splice(i, 0, ...add.split(''));
            }
            console.log(arr.join(''));
            return arr;
        },
        'Remove Stop': (arr, rest) => {
            let [start, end] = rest.sort((a, b) => Number(a) - Number(b));
            if (Number(start) >= 0 && Number(start) < arr.length && Number(end) >= 0 && Number(end) < arr.length) {
                arr = (arr.join('').substring(0, Number(start)) + arr.join('').substring(Number(end) + 1, arr.join('').length)).split('');
            }
            console.log(arr.join(''));
            return arr;
        },
        'Switch': (arr, rest) => {
            let [old, newStr] = rest;
            if (arr.join('').includes(old)) {
                arr = arr.join('').replace(old, newStr).split('');
            }
            console.log(arr.join(''));
            return arr;
        },
    }
    for (const e of data.slice(1)) {
        if (e == 'Travel' == true) {
            return `Ready for world tour! Planned stops: ${arr.join('')}`;
        }

        let [command, ...rest] = e.split(':');
        arr = commandsMap[command](arr, rest);
    }
}
console.log(solve(['Albania',
    'Add Stop:7:Nigeria',
    'Remove Stop:1:4',
    "Switch:Albania: Azərbaycan",
    "Travel"]));