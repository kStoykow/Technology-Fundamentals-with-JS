function isAmazing(numberToCheck) {
    numberToCheck = numberToCheck.toString();
    let digitsSum = 0;

    for (let i = 0; i < numberToCheck.length; i++) {
        digitsSum += Number(numberToCheck[i]);
    }

    let result = digitsSum.toString().includes('9');
    console.log(result
        ? `${numberToCheck} Amazing? True`
        : `${numberToCheck} Amazing? False`);
}