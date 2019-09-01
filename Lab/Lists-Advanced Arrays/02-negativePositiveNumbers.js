function makeNew(array) {
    let newArr = [];
    for (const element of array) {
        if (element >= 0) {
            newArr.push(element);
        } else {
            newArr.unshift(element);
        }
    }
    
    console.log(newArr.join('\n'));
}