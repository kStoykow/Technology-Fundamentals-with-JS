function biggest(firstNum, secondNum, thirdNum) {
    if (firstNum >= secondNum && firstNum >= thirdNum) {
        console.log(firstNum);
    } else if (secondNum > firstNum && secondNum >= thirdNum) {
        console.log(secondNum);
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        console.log(thirdNum);
    }
}