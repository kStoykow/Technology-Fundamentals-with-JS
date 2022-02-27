function solve(input) {
    let sideSize = input.shift();
    let sheetsQuantity = input.shift();
    let areaCover = input.shift();
    let wholeSize = 6 * sideSize * sideSize;
    let smallSheets = Math.trunc(sheetsQuantity / 3);
    let covered = ((sheetsQuantity - smallSheets) * areaCover) + (smallSheets * (areaCover * 0.25));
    console.log(`You can cover ${(covered / wholeSize * 100).toFixed(2)}% of the box.`);
}
solve([2.5, 32, 4.25])