function print(array) {
    let step = Number(array.pop());
    let toPrint = [];

    for (let i = 0; i < array.length; i += step) {
        toPrint.push(array[i]);
    }

    console.log(toPrint.join(' '));
}