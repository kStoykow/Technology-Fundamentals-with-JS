function solve(arr, commands) {
    let r = '';
    const commandsMap = {
        print: (arr) => {
            r += `[ ${arr.join(', ')} ]\n`;
            return arr;
        },
        add: (arr, i, e) => {
            arr.splice(i, 0, Number(e[0]));
            return arr;
        },
        addMany: (arr, i, rest) => {
            arr.splice(i, 0, ...rest.map(Number));
            return arr;
        },
        contains: (arr, e) => {
            r += `${arr.indexOf(Number(e))}\n`;
            return arr;
        },
        remove: (arr, i) => {
            arr.splice(Number(i), 1);
            return arr;
        },
        shift: (arr, rotates) => {
            for (let i = 0; i < Number(rotates) % arr.length; i++) {
                arr.push(arr.shift());
            }
            return arr;
        },
        sumPairs: (arr) => {
            let newArr = [];
            if (arr.length % 2 == 0) {
                for (let i = 0; i < arr.length; i += 2) {
                    newArr.push(arr[i] + arr[i + 1]);
                }
                arr = newArr;

            } else {
                let lastElement = arr.pop();
                for (let i = 0; i < arr.length; i += 2) {
                    newArr.push(arr[i] + arr[i + 1]);
                }
                arr = newArr;
                arr.push(lastElement);
            }
            return arr;
        }
    }

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');
        let [c, index, ...rest] = command;
        arr = commandsMap[c](arr, index, rest);
    }
    return r;
}
console.log(solve([2, 2, 4, 2, 4],
    ['add 1 4', 'sumPairs', 'contains 4', 'print']));