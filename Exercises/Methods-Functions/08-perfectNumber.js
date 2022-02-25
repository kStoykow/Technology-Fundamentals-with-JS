function isPerfect(number) {
    return getSum(number);

    function getSum(n) {
        let divisorsSum = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                divisorsSum += i;
            }
        }

        if ((divisorsSum / 2) === number) {
            return `We have a perfect number!`;
        }
        return 'It\'\s not so perfect.';
    }
}
console.log(isPerfect(6));