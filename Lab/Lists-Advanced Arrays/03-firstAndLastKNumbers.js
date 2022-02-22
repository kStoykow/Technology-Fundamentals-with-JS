function print(arr) {
    let toPrint = arr.shift();
    return [arr.slice(0, toPrint).join(' '), arr.slice(arr.length - toPrint).join(' ')].join('\n');
}
console.log(print([2, 3, 4, 5, 6]));