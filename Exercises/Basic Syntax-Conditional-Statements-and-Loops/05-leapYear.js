function leapYear(y) {
    let isLeap = {
        true: 'yes',
        false: 'no'
    }
    return isLeap[(y % 4 === 0 && y % 100 != 0) || y % 400 == 0];
}
console.log(leapYear(2004));