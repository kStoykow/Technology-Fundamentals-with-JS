function modifyArray(input) {
    let newArray = [];
    let originalArraySum = 0;
    let newArraySum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            newArray.push(input[i] + i);
            newArraySum += newArray[i];
        } else {
            newArray.push(input[i] - i);
            newArraySum += newArray[i];
        }

        originalArraySum += input[i];
    }

    console.log(newArray);
    console.log(originalArraySum);
    console.log(newArraySum);
}