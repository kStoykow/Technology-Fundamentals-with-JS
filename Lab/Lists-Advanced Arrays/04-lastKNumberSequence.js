function solve(howLong, lastElements) {
    let array = [1];
    for (let i = 1; i < howLong; i++) {
        let currentIndex = Math.max(i - lastElements, 0);
        let subArr = array.slice(currentIndex);
        let sum = subArr.reduce((a, b) => a + b);
        array.push(sum);
    }

    console.log(array.join(' '));
}