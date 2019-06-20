function condense(array) {
    let condensed = [];

while (array.length > 1) {
    
    for (let i = 0; i < array.length - 1; i++) {
        condensed.push(Number(array[i]) + Number(array[i + 1]));
    }
    array = condensed.slice() ;
    condensed = [];
}
    console.log(array[0]);
}
condense(['5', '0', '4', '1', '2'])