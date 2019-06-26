function extract(array) {
    let extractedArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            extractedArr.push(array[i]);
        }

        if (array[i] >= array[i - 1]) {
            extractedArr.push(array[i]);
        }
    }

    console.log(extractedArr.join(' '));
}