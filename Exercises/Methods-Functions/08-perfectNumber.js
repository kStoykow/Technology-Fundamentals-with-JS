function isPerfect(number) {
    let perfectOrNo = getSum();
    console.log(perfectOrNo);

    function getSum() {
        let divisorsSum = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divisorsSum += i;
            }
        }

        if ((divisorsSum / 2) === number) {
            return `We have a perfect number!`;
        }

        return 'It\'\s not so perfect.';
    }
}