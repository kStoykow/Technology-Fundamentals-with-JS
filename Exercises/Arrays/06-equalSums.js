function equalSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        let left = arr.slice(0, i).reduce((a, b) => a + b, 0);
        let right = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        
        if (i == 0) {
            left = 0;
        } else if (i == arr.length - 1) {
            right = 0;
        }
        if (left == right) {
            return i;
        }
    }
    return 'no';
}
