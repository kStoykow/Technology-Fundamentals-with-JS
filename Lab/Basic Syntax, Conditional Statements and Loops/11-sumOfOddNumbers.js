function printAndSum(oddsToPrint) {
    let oddsSum = 0;
    let result = '';

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 1) {
            oddsSum += i;
            result += `${i}\n`;
            if (result.split('\n').filter(e => e != '').length === oddsToPrint) {
                break;
            }
        }
    }
    result += `Sum: ${oddsSum}`;
    return result
}
console.log(printAndSum(5));