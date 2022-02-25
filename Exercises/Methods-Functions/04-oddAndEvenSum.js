function printSum(n) {
    return digitsSum(n);

    function digitsSum(n) {
        n = n.toString().split('');
        let even = 0;
        let odd = 0;
        n.map(e => {
            if (Number(e) % 2 == 0) {
                even += Number(e);
                return even;
            } else {
                odd += Number(e);
                return odd;
            }
        });
        return `Odd sum = ${odd}, Even sum = ${even}`;
    }
}
console.log(printSum(1000435));