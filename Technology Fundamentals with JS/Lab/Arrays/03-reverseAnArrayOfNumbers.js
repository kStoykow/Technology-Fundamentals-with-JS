function reverseNumArr(n, array) {
    let reversedNums = '';
    for (let i = 0; i < n; i++) {
        reversedNums += array[n - 1 - i] + ' ';
    }

    console.log(reversedNums);
}
reverseNumArr(3, [10, 20, 30, 40, 50])