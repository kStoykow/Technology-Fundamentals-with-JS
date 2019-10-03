function solve(input) {
    input = input.map(Number);
    let days = input.shift();
    let dailyPlunder = input.shift();
    let goalPlunder = input.shift();

    let totalPlunder = 0;
    for (let day = 1; day <= days; day++) {
        totalPlunder += dailyPlunder;
        if (day % 3 == 0) {
            totalPlunder += (0.5 * dailyPlunder);
        }

        if (day % 5 == 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= goalPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = (totalPlunder / goalPlunder) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}
solve(['5', '40', '100'])