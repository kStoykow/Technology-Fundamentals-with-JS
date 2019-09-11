function bomb(array, bombParameters) {
    let valueToBomb = bombParameters.shift();
    let power = bombParameters.shift();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueToBomb) {
            if (array.length < i + power) {
                array.splice(i - power);
                i = -1;
            } else if (i - power < 0) {
                array.splice(0, i + 1 + power);
                i = -1;
            } else {
                array.splice(i - power, (1 + power * 2));
                i = -1;
            }
        }
    }

    if (array.length > 0) {
        console.log(array.reduce((a, b) => a + b));
    } else {
        console.log(0);
    }
}