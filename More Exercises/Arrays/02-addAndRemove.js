function solve(commands) {
    let currentNumber = 0;
    let newArray = [];

    for (let i = 0; i < commands.length; i++) {
        currentNumber++;

        if (commands[i] === 'add') {
            newArray.push(currentNumber);
        } else {
            newArray.pop();
        }
    }

    if (newArray.length < 1) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}