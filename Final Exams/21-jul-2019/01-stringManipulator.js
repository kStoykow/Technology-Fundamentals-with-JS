function solve(input) {
    let result = '';
    let line = input.shift();

    let concat = (string) => result = result.concat(string);
    let upgrade = (char, string) => {
        while (string.includes(char)) {
            string = string.replace(char, String.fromCharCode(char.charCodeAt(0) + 1))
        }
        return result = string;
    };
    let print = () => console.log(result);
    let index = (char, string) => {
        if (string.includes(char)) {
            let toPrint = [];
            for (let i = 0; i < string.length; i++) {
                if (string[i] == char) {
                    toPrint.push(i);
                }
            }

            console.log(toPrint.join(' '));
        } else {
            console.log('None');
        }
    };

    let remove = (str, string) => {
        while (string.includes(str)) {
            string = string.replace(str, '');
        }
        return result = string;
    };

    while (line != 'End') {
        if (line.includes('Add')) {
            let [, str] = line.split(' ');
            concat(str);

        } else if (line.includes('Upgrade')) {
            let [, char] = line.split(' ');
            upgrade(char, result);

        } else if (line.includes('Print')) {
            print();

        } else if (line.includes('Index')) {
            let [, char] = line.split(' ');
            index(char, result);

        } else {
            let [, str] = line.split(' ');
            remove(str, result);
        }

        line = input.shift();
    }
}
solve(['Add Zzra',
    'Print',
    'Upgrade z',
    'Print',
    'Index z',
    'Remove brb',
    'Print',
    'End'])