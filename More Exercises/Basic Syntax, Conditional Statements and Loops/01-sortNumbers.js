function sort(firstNum, secondNum, thirdNum) {

    let biggestNumIs = 0;
    let midNumIs = 0;
    let lowestNumIs = 0;

    if (firstNum > secondNum && firstNum > thirdNum) {
        biggestNumIs = firstNum;
        if (secondNum >= thirdNum) {
            midNumIs = secondNum;
            lowestNumIs = thirdNum;
        } else if (thirdNum >= secondNum) {
            midNumIs = thirdNum;
            lowestNumIs = secondNum;
        }
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        biggestNumIs = secondNum;
        if (firstNum >= thirdNum) {
            midNumIs = firstNum;
            lowestNumIs = thirdNum
        } else if (firstNum <= thirdNum) {
            midNumIs = thirdNum;
            lowestNumIs = firstNum;
        }
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        biggestNumIs = thirdNum;
        if (firstNum >= secondNum) {
            midNumIs = firstNum;
            lowestNumIs = secondNum;
        } else if (firstNum <= secondNum){
            midNumIs = secondNum;
            lowestNumIs = firstNum;
        }
    }

    console.log(biggestNumIs);
    console.log(midNumIs);
    console.log(lowestNumIs);
}