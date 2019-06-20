function areEqual(leftArr, rightArr) {
    let counter = 0;
    let sum = 0;
    let isEqual = true;

    for (let i = 0; i < leftArr.length; i++) {
        if (leftArr[i] === rightArr[i]) {
            if (isEqual) {
                counter++;
                sum += Number(leftArr[i]);
            }

        } else {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${counter} index`);
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}