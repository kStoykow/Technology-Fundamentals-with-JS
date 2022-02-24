function isCommon(arr, arr2) {
    return arr.filter(e => arr2.includes(e)).join('\n');
}
console.log(isCommon([1, 2, 3], [1, 2, 4, 3]));