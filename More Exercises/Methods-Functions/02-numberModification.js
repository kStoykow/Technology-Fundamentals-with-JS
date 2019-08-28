function highDigitsValue(number) {
    let checker = number + '';
    let digitsSum = 0;
    let digitsCount = 0;

    for (let i = 0; i < checker.length; i++) {
        digitsSum += Number(checker[i]);
        digitsCount++;
    }

    if (digitsSum / digitsCount > 5) {
        console.log(checker);

    } else {
        checker += 9;
        highDigitsValue(checker);
    }
}