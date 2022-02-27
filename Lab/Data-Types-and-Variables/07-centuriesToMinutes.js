function timeCalculator(centuries) {
    let days = Math.trunc(centuries * 100 * 365.2422);
    return `${centuries} centuries = ${centuries * 100} years = ${days} days = ${days * 24} hours = ${days * 24 * 60} minutes`;
}
console.log(timeCalculator(1));