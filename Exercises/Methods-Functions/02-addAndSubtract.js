function qwerty(firstNum, secondNum, thirdNum) {
    let firstTwoNumSum = sum();
    let result = subtract();
    console.log(result);


    function sum() {
        return firstNum + secondNum;
    }

    function subtract() {
        return firstTwoNumSum - thirdNum;
    }

}