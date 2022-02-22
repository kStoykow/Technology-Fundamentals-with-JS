function areEqual(arr1, arr2) {
    function isDifferent(arr1, arr2) {
        if (arr1.filter((e, i) => e != arr2[i]).length != 0) {
            return `Arrays are not identical. Found difference at ${arr1.indexOf(arr1.filter((e, i) => e != arr2[i])[0])} index`;
        } else {
            return `Arrays are identical. Sum: ${arr1.reduce((a, b) => a + b)}`;
        }
    }

    return isDifferent(arr1, arr2);
}
console.log(areEqual([1, 2, 3], [1, 2, 4]));