function rounding(number, roundTo) {
    if (roundTo > 15) {
        roundTo = 15;
    }
    console.log(Number(number.toFixed(roundTo)));
}