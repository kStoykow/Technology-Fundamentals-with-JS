function triangle(num) {
    let r = '';
    for (let i = 1; i <= num; i++) {
        r += `${`${i} `.repeat(i)} \n`;
    }
    return r;
}
console.log(
    triangle(3)
);