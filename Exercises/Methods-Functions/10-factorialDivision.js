function factoralDivision(x, y) {
    return factorialNumbersDivision(x, y);

    function factorialNumbersDivision(x, y) {
        let xResult = x;
        let yResult = y;

        for (let i = 1; i < x; i++) {
            xResult *= (x - i);
        }
        for (let j = 1; j < y; j++) {
            yResult *= (y - j);
        }
        return (xResult / yResult).toFixed(2);
    }
}
console.log(factoralDivision(5, 2));