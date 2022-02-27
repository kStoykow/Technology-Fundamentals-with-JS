function solve(input) {
    let username = input.shift();
    let command = input.shift();

    let lowerOrUpper = (parameter) => {
        if (parameter == 'lower') {
            return username = username.toLowerCase();
        }
        return username = username.toUpperCase();
    };
    let reverse = (start, end, string) => {
        start = Number(start);
        end = Number(end);
        if (string.length >= start && string.length > end) {
            let substr = string.substring(start, end + 1);
            return console.log(substr.split('').reverse().join(''));
        }
    };
    let cut = (string, substr) => {
        if (string.includes(substr)) {
            string = string.replace(substr, '');
            console.log(string);
            return username = string;
        }

        console.log(`The word ${username} doesn't contain ${substr}.`);
        return;
    };
    let replace = (char, string) => {
        let regex = new RegExp(char, "g")
        string = string.replace(regex, '*');
        return console.log(string);
    }
    let check = (char, string) => {
        if (string.includes(char)) {
            return console.log('Valid');
        }
        return console.log(`Your username must contain ${char}.`);
    };

    while (command != 'Sign up') {
        if (command.includes('Case')) {
            let [, upperOrLower] = command.split(' ');
            lowerOrUpper(upperOrLower);
            console.log(username);

        } else if (command.includes('Reverse')) {
            let [, startIndex, endIndex] = command.split(' ');
            reverse(startIndex, endIndex, username);

        } else if (command.includes('Cut')) {
            let [, substr] = command.split(' ');
            cut(username, substr);

        } else if (command.includes('Replace')) {
            let [, char] = command.split(' ');
            replace(char, username);

        } else {
            let [, char] = command.split(' ');
            check(char, username);
        }

        command = input.shift();
    }
}
solve(['ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up'])