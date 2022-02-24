function rotate(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift());
    }

    return arr.join(' ');
}
console.log(rotate([1, 2, 3, 4], 2));