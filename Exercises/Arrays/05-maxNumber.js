function topInteger(arr) {
    let top = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).every(e => e < arr[i])) {
            top.push(arr[i]);
        }

    }
    return top.join(' ');
}
console.log(topInteger([1, 4, 3, 2, 5]));