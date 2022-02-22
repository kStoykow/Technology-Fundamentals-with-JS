function prit() {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            result += i;
        }
    }
    return result;
}