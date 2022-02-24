function printGrade(grade) {
    let res = calcGrade(grade);

    return res;
    function calcGrade(x) {
        if (x < 3) {
            return `Fail (2.00)`;

        } if (x >= 3 && x < 3.5) {
            return `Poor (${x.toFixed(2)})`;

        } if (x >= 3.5 && x < 4.5) {
            return `Good (${x.toFixed(2)})`;

        } if (x >= 4.5 && x < 5.5) {
            return `Very good (${x.toFixed(2)})`;
        }
        if (x >= 5.5 && x < 6) {
            return `Excellent (${x.toFixed(2)})`;
        }
        return 'Error!';
    }
}
console.log(printGrade(7));