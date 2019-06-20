function sumEvenNums(array) {
    let numbersSum = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
        if (array[i] % 2 === 0) {
            numbersSum += array[i];
        }
    }
    console.log(numbersSum);

}
sumEvenNums(['1', '2', '3', '4', '5', '6']);