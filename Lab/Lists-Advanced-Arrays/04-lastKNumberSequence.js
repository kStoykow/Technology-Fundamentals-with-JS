function solve(howLong, lastElements) {
    let arr = [1];
    for (let i = 1; i < howLong; i++) {
        let currentIndex = Math.max(i - lastElements, 0);
        let subArr = arr.slice(currentIndex);
        let sum = subArr.reduce((a, b) => a + b);
        arr.push(sum);
    }

    return arr.join(' ');
}
console.log(solve(10, 7));