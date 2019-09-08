function arrayModification(array) {
    array = array.map(String);
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(Number(array[i]))) {
            newArray.push(Number(array[i]));
        }
    }

    console.log(newArray.join(' '));
}