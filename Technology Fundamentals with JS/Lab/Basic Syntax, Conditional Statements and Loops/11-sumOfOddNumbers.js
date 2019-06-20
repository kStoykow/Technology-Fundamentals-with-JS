function printAndSum(oddsToPrint) {
    let oddsSum = 0;
    oddsCounter = 0;

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 1) {
            oddsSum += i;
            oddsCounter++;
            console.log(i);
            if (oddsCounter === oddsToPrint) {
                break;
            }
        }
    }
    console.log(`Sum: ${oddsSum}`);
}