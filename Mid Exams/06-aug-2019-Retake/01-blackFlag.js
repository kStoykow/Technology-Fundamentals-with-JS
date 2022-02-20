function solve(arr) {
    let [days, plunder, target] = arr.map(Number);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += plunder;
        if (i % 3 == 0) {
            totalPlunder += (0.5 * plunder);
        }
        if (i % 5 == 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= target) {
        return `Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`;
    } else {
        return `Collected only ${((totalPlunder / target) * 100).toFixed(2)}% of the plunder.`;
    }
}
console.log(solve(['5', '40', '100']))
console.log(solve(["10", "20", "380"]))