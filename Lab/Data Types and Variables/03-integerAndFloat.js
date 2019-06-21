function isInteger(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
   let result = sum % 1 !== 0 ? `${sum} - Float` : `${sum} - Integer`;
   console.log(result);
}