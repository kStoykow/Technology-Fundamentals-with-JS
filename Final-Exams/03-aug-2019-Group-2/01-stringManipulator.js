function solve(input) {
    let myString = input.shift();
    let command = input.shift();

    let change = (string, char, replacement) => {
        let regex = new RegExp(char, "g");
        myString = string.replace(regex, replacement);
        console.log(myString);
        return;
    };
    let includes = (string, searchString) => {
        if (string.includes(searchString)) {
            console.log('True');
        } else {
            console.log('False');
        }
        return;
    };
    let end = (string, endsWith) => {
        if (string.endsWith(endsWith)) {
            console.log('True');
        } else {
            console.log('False');
        }
        return;
    };
    let uppercase = (string) => myString = string.toUpperCase();
    let findIndex = (string, char) => console.log(string.indexOf(char));
    let cut = (string, start, length) => myString = string.substr(start, length);

    while (command != 'Done') {
        if (command.includes('Change')) {
            let [, char, replacement] = command.split(' ');
            change(myString, char, replacement);

        } else if (command.includes('Includes')) {
            let [, string] = command.split(' ');
            includes(myString, string);

        } else if (command.includes('End')) {
            let [, string] = command.split(' ');
            end(myString, string);

        } else if (command.includes('Uppercase')) {
            uppercase(myString);
            console.log(myString);

        } else if (command.includes('FindIndex')) {
            let [, char] = command.split(' ');
            findIndex(myString, char);

        } else {
            let [, startIndex, length] = command.split(' ');
            cut(myString, startIndex, length);
            console.log(myString);
        }

        command = input.shift();
    }
}
solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done',
])