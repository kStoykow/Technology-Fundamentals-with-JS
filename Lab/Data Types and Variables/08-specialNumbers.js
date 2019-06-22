function isSpecial(numberRange) {
    for (let i = 1; i <= numberRange; i++) {
        let currentNum = i.toString();
        let currentDigitsSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            currentDigitsSum += Number(currentNum[j]);
        }

        if (currentDigitsSum === 5 || currentDigitsSum === 7 || currentDigitsSum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}