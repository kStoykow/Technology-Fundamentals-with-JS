function calculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne, numTwo));
            break;

        case 'divide':
            let divide = (numOne, numTwo) => numOne / numTwo;
            console.log(divide(numOne, numTwo));
            break;

        case 'add':
            let add = (numOne, numTwo) => numOne + numTwo;
            console.log(add(numOne, numTwo));
            break;

        case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo;
            console.log(subtract(numOne, numTwo));
    }
}