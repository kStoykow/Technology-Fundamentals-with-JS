function calculate(firstOperand, operator, secondOperand) {
    if (operator === '+') {
        console.log((firstOperand + secondOperand).toFixed(2));
    } else if (operator === '-') {
        console.log((firstOperand - secondOperand).toFixed(2));
    } else if (operator === '*') {
        console.log((firstOperand * secondOperand).toFixed(2));
    } else {
        console.log((firstOperand / secondOperand).toFixed(2));
    }
}