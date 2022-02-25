function addAndSubtract(x, y, z) {
    let res = sum(x, y);
    return subtract(res, z);

    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }
}
console.log(addAndSubtract(1, 3, 4));