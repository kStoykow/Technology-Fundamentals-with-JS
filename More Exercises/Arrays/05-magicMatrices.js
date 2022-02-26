function isMagical(matrix) {
    let checker = matrix[0].reduce((a, b) => a + b);
    let isMagical = true;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((a, b) => a + b) != checker) {
            isMagical = false;
        }
        if (matrix.reduce((a, e) => a + e[i], 0) != checker) {
            isMagical = false;
        }
    }
    return isMagical;
}
console.log(isMagical(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))