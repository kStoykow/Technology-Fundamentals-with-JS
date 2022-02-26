function findNeighbors(arr) {
    let r = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        r += arr[i].filter((e, index) => e == arr[i + 1][index]).length;
    }
    return r;
}
console.log(findNeighbors([
    ['16', '6', '5', '6'],
    ['5', '6', '7', '5'],
    ['1', '6', '6', '4']]));