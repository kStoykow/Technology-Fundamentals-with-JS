function isSpecial(numberRange) {
    for (let i = 1; i <= numberRange; i++) {
        let currentNum = i;
        let currentDigitsSum = 0;

        while (currentNum != 0) {
            currentDigitsSum += currentNum % 10;
            currentNum = Math.trunc(currentNum / 10);
        }

        if (currentDigitsSum === 5 || currentDigitsSum === 7 || currentDigitsSum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}