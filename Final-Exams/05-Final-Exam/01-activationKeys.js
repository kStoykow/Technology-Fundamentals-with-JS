function solve(arr) {
    let key = arr.shift();
    let r = '';
    const commandsMap = {
        'Contains': (str, arr) => {
            str.includes(arr[0]) == true ? r += `${str} contains ${arr[0]}\n` : r += 'Substring not found!\n';
            return str;
        },
        'Flip': (str, arr) => {
            let [upperOrLower, start, end] = arr;
            let sliced = str.split('').slice(Number(start), Number(end)).join('');
            let replaced = sliced[`to${upperOrLower}Case`]();
            str = str.replace(sliced, replaced);
            r += `${str}\n`;
            return str;
        },
        'Slice': (str, arr) => {
            let [start, end] = arr.map(Number);
            str = str.split('');
            str.splice(start, end - start);
            r += `${str.join('')}\n`;
            return str.join('');
        },
    }

    for (const e of arr) {
        if (e == 'Generate' == true) {
            return r + `Your activation key is: ${key}`;
        }

        let [command, ...rest] = e.split('>>>');
        key = commandsMap[command](key, rest);
    }
}
console.log(solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));