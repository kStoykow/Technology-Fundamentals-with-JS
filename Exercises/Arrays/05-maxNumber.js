function topInteger(array) {
    let topIntegers = [];
    
    for (let i = 0; i < array.length; i++) {
        let biggerThanElements = 0;

        for (let compare = i; compare < array.length; compare++) {
            if (array[i] > array[compare]) {
                biggerThanElements++
            }

            if (biggerThanElements === (array.length - 1 - i)) {
                topIntegers.push(array[i]);
            }
        }
    }

    console.log(topIntegers.join(' '));
}