function findMagicSum(array) {
    let numberToCompare = Number(array[1]);
    let myArray = array[0].split(' ');

    let combinations = [];

    for (let i = 0; i < myArray.length - 1; i++) {
        let currentElement = Number(myArray[i]);

        for (let j = i + 1; j < myArray.length; j++) {
            let nextElement = Number(myArray[j]);

            if (currentElement + nextElement === numberToCompare) {
                combinations.push(`${currentElement} ${nextElement}`);
            }
        }
    }

    console.log(combinations.join('\n'));
}