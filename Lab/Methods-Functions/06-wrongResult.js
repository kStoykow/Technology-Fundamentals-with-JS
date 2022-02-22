function isPositive(...params) {
    return postiveOrNegative(params);

    function postiveOrNegative(params) {
        return params.reduce((a, b) => a * b) < 0 ? 'Negative' : 'Positive';
    }
}
console.log(isPositive(-4, 5, 6));