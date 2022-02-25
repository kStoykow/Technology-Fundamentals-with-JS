function printSmallest(x, y, z) {
    return smallestNum(x, y, z);

    function smallestNum(...params) {
        return params.sort((a, b) => a - b)[0];
    }
}
console.log(printSmallest(2, 5, 1));