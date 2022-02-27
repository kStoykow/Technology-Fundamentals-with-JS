function highDigitsValue(x) {
    let numAsString = x + '';
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
        count++;
    }

    if (sum / count > 5) {
        console.log(numAsString);

    } else {
        numAsString += 9;
        highDigitsValue(numAsString);
    }
}
console.log(highDigitsValue(101));