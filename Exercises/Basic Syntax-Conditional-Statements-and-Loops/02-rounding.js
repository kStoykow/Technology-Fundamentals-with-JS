function rounding(x, roundTo) {
    let rounderMap = {
        true: (e) => 15,
        false: (e) => e
    }
    return Number(x.toFixed(rounderMap[roundTo > 15](roundTo)));
}
console.log(rounding(3.1234567890123456781232131321, 3));