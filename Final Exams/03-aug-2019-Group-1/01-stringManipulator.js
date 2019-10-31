function solve(input) {
    let myString = input.shift();
    let command = input.shift();

    let translate = (string, char, replacement) => {
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
    let startsWith = (string, startsWith) => {
        if (string.startsWith(startsWith)) {
            console.log('True');
        } else {
            console.log('False');
        }
        return;
    };
    let lowercase = (string) => myString = string.toLowerCase();
    let findIndex = (string, char) => console.log(string.lastIndexOf(char));
    let remove = (string, start, count) => {
        myString = string.replace(string.substr(start, count), "");
        return;
    };

    while (command != 'End') {
        if (command.includes('Translate')) {
            let [, char, replacement] = command.split(' ');
            translate(myString, char, replacement);

        } else if (command.includes('Includes')) {
            let [, string] = command.split(' ');
            includes(myString, string);

        } else if (command.includes('Start')) {
            let [, string] = command.split(' ');
            startsWith(myString, string);

        } else if (command.includes('Lowercase')) {
            lowercase(myString);
            console.log(myString);

        } else if (command.includes('FindIndex')) {
            let [, char] = command.split(' ');
            findIndex(myString, char);

        } else {
            let [, startIndex, count] = command.split(' ');
            remove(myString, startIndex, count);
            console.log(myString);
        }

        command = input.shift();
    }
}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End',
])