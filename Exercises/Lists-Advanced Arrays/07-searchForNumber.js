function manipulate(array, operations) {
    let elementsToTake = operations.shift();
    let elementsToShift = operations.shift();
    let numberToFind = operations.shift();

    let newArray = array.slice(0, elementsToTake);
    for (let i = 0; i < elementsToShift; i++) {
        newArray.shift();
    }

    let counter = 0;
    for (const element of newArray) {
        if (element == numberToFind) {
            counter++;
        }
    }

    console.log(`Number ${numberToFind} occurs ${counter} time.`);
}