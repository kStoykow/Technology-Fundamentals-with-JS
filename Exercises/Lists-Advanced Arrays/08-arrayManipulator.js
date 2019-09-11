function solve(array, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        if (currentCommand.includes('add')) {
            let atIndex = currentCommand[1];
            let element = currentCommand[2];
            array.splice(atIndex, 0, Number(element));

        } else if (currentCommand.includes('addMany')) {
            currentCommand.shift();
            let atIndex = Number(currentCommand.shift());
            for (let j = 0; j < currentCommand.length; j++) {
                array.splice(atIndex + j, 0, Number(currentCommand[j]));
            }

        } else if (currentCommand.includes('contains')) {
            let numberToCheck = currentCommand[1];
            for (let contains = 0; contains < array.length; contains++) {
                if (array[contains] == numberToCheck) {
                    console.log(contains);
                    break;
                }


            }
            if (!array.includes(Number(numberToCheck))) {
                console.log(-1);
            }

        } else if (currentCommand.includes('remove')) {
            let atIndex = currentCommand[1];
            array.splice(atIndex, 1);

        } else if (currentCommand.includes('shift')) {
            let shiftTimes = currentCommand[1];
            for (let shifts = 0; shifts < shiftTimes; shifts++) {
                let firstElement = array.shift();
                array.push(firstElement);
            }

        } else if (currentCommand.includes('sumPairs')) {
            let newArr = [];
            for (let sumPairs = 0; sumPairs < array.length; sumPairs += 2) {
                if (sumPairs + 1 < array.length) {
                    newArr.push(array[sumPairs] + array[sumPairs + 1]);
                } else {
                    newArr.push(array[sumPairs]);
                }
            }
            array = newArr;

        } else if (currentCommand.includes('print')) {
            console.log(array);
            break;
        }
    }
}

solve([1, 2, 3, 4, 5, 7], ['add 1 8', 'sumPairs', 'contains 1', 'contains 3', 'add 0 0', 'print'])