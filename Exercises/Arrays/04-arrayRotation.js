function rotate(origirnalArray, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = origirnalArray.shift();
        origirnalArray.push(firstElement);
    }

    console.log(origirnalArray.join(' '));
}