function solve(array) {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {

        if (typeof array[i] == 'number') {
            numbers.push(array[i]);
        } else {
            
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                return;

            } else {
                let operandTwo = numbers.pop();
                let operandOne = numbers.pop();
                let newResult;

                if (array[i] === '+') {
                    newResult = operandOne + operandTwo;
                    numbers.push(newResult);
                } else if (array[i] === '-') {
                    newResult = operandOne - operandTwo;
                    numbers.push(newResult);
                } else if (array[i] === '*') {
                    newResult = operandOne * operandTwo;
                    numbers.push(newResult);
                } else {
                    newResult = operandOne / operandTwo;
                    numbers.push(newResult);
                }
            }
        }
    }

    if (numbers.length !== 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(numbers[0]);
    }
}
solve()