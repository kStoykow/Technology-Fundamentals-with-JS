function print(array) {
    let toPrint = array.shift();
    console.log(array.slice(0, toPrint).join(' '));
    console.log(array.slice(array.length - toPrint).join(' '));
}