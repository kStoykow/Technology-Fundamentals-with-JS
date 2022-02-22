function newRearrangedArr(arr) {
    let newArr = [];
    for (let e of arr) {
        if (e >= 0) {
            newArr.push(e);
        } else {
            newArr.unshift(e);
        }
    }

    return newArr.join('\n');
}
console.log(newRearrangedArr([-2, -4, 2, 4, 3]));