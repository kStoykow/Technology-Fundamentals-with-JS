function rotate(array) {
    let rotates = Number(array.pop());

    for (let i = 0; i < rotates; i++) {
        let lastElement = array.pop();
        array.splice(0, 0, lastElement);
    }

    console.log(array.join(' '));
}