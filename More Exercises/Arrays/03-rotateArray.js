function rotate(arr) {
    let rotates = Number(arr.pop());

    for (let i = 0; i < rotates % arr.length; i++) {
        arr.splice(0, 0, arr.pop());
    }
    return arr.join(' ');
}
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']));