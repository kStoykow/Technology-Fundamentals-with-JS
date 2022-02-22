function isInteger(...nums) {
    return nums.reduce((a, b) => a + b) % 1 !== 0 ? `${nums.reduce((a, b) => a + b)} - Float` : `${nums.reduce((a, b) => a + b)} - Integer`;
}
console.log(isInteger(1, 2, 3));