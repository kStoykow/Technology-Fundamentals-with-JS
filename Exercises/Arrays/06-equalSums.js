function equalSumsLeftAndRight(array) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < array.length; i++) {
        leftSum = 0;
        rightSum = 0;

        for (let leftArr = 0; leftArr < i; leftArr++) {
            if (i === 0) {
                leftSum += array[leftArr] + 0;
            } else {
                leftSum += array[leftArr];
            }
        }

        for (let rightArr = i + 1; rightArr < array.length; rightArr++) {
            if (i === array.length) {
                rightSum += array[rightArr] + 0;
            } else {
                rightSum += array[rightArr];
            }
        }

        if (leftSum === rightSum) {
            console.log(i);
            break;
        }
    }

    if(leftSum !== rightSum){
        console.log('no');
    }
}