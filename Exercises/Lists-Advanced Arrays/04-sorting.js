function sort(array) {
    array.sort((a, b) => a - b);
    let newArr = [];

    while (array.length > 0) {
        let smallest = array.shift();
        let biggest = array.pop();
        if (biggest) {
            newArr.push(biggest);
        }

        if (smallest) {
            newArr.push(smallest);
        }
    }

    console.log(newArr.join(' '));
}