function solve(input) {
    input.pop();
    let array = input.shift().split(' ');

    for (let command of input) {
        command = command.split(' ');

        if (command.includes('Switch')) {
            let [toDo, i] = command;
            if (i >= 0 && i < array.length) {
                if (array[i] <= 0) {
                    array[i] = Math.abs(array[i]);
                } else {
                    array[i] = -array[i];
                }
            }

        } else if (command.includes('Change')) {
            let [toDo, i, value] = command;
            if (i >= 0 && i < array.length) {
                array[i] = value;
            }

        } else if (command.includes('Negative')) {
            console.log(negative(array));

        } else if (command.includes('Positive')) {
            console.log(positive(array));

        } else {
            console.log(sum(array));
        }
    }

    let toPrint = array.filter(e => e >= 0);
    console.log(toPrint.join(' '));
    
    function negative(arr) {
        return arr
            .map(Number)
            .filter(e => e < 0)
            .reduce((acc, e) => acc + e);
    }

    function positive(arr) {
        return arr
            .map(Number)
            .filter(e => e > 0)
            .reduce((acc, e) => acc + e);
    }

    function sum(arr) {
        return arr
            .map(Number)
            .reduce((acc, e) => acc + e);
    }
}
solve(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'])