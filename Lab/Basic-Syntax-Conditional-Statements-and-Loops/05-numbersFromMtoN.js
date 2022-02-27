function print(from, to) {
    let res = 0;
    for (let i = from; i >= to; i--) {
        res += i;
    }
    return res;
}