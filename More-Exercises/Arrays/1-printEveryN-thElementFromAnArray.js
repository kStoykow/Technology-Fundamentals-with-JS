function print(arr) {
    let step = Number(arr.pop());
    let r = new Array(arr.length % Number(step));

    for (let i = 0; i < arr.length; i += step) {
        r.push(arr[i]);
    }
    return r.join(' ');
}
console.log(print(['5', '20', '31', '4', '20', '2']));