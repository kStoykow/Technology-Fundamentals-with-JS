function firstAndLastTwo(array) {
    let result = array
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ')
    console.log(result);
}