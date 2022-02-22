function subtraction(arr) {
    function elementsCalc(b, a) {
        if (b % 2 == 0) {
            a[0] += b;
        } else {
            a[1] += b;
        }
        return a;
    }

    return arr.reduce((a, b) => {
        elementsCalc(b, a);
        return a;
    }, [0, 0]).reduce((a, b) => a - b);
}
console.log(subtraction([3, 5, 7, 9]));