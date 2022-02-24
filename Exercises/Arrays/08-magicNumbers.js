function findMagicSum(arr) {
    let compareTo = Number(arr[1]);
    let myArr = arr[0].split(' ');
    let combinations = [];

    for (let i = 0; i < myArr.length - 1; i++) {
        if (Number(myArr[i]) + Number(myArr[i + 1]) === compareTo) {
            combinations.push(`${Number(myArr[i])} ${Number(myArr[i + 1])}`);
        }
    }
    return combinations.join('\n');
}
console.log(findMagicSum(['1 7 6 2 19 23', '8']));