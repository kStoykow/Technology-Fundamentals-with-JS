function modifyArray(arr) {
    let myArr = arr.map((e, i) => {
        if (e % 2 === 0) {
            return e + i;
        } else {
            return e - i;
        }
    });

    return [`[ ${myArr.join(', ')} ]`, arr.reduce((a, b) => a + b), myArr.reduce((a, b) => a + b)].join('\n');
}
console.log(modifyArray([1, 2, 3, 4]));