function isPositive(firstNum, secondNum, thirdNum) {
    let numType = typeOfNumber();
    console.log(numType);

    function typeOfNumber() {
        if (firstNum >= 0 && secondNum >= 0 && thirdNum >= 0) {
            return 'Positive';
        }

        if (firstNum < 0 && secondNum < 0 && thirdNum < 0) {
            return 'Negative';
        }

        if (firstNum < 0 && secondNum < 0 && thirdNum >= 0) {
            return 'Positive';
        }

        if (firstNum < 0 && secondNum >= 0 && thirdNum >= 0) {
            return 'Positive';
        }

        if (firstNum < 0 && secondNum >= 0 && thirdNum < 0) {
            return 'Positive';
        }

        if (firstNum >= 0 && secondNum >= 0 && thirdNum < 0) {
            return 'Negative';
        }

        if (firstNum >= 0 && secondNum < 0 && thirdNum < 0) {
            return 'Positive';
        }

        if (firstNum >= 0 && secondNum < 0 && thirdNum >= 0) {
            return 'Negative';
        }
    }
}