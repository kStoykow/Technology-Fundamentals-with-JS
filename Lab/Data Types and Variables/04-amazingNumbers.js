function isAmazing(x) {
    x = x.toString();
    let digitsSum = 0;

    for (let i = 0; i < x.length; i++) {
        digitsSum += Number(x[i]);
    }

    return digitsSum.toString().includes('9') ? `${x} Amazing? True` : `${x} Amazing? False`;
}
console.log(isAmazing(45));