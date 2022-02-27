function solve(input) {
    let totalSpirit = 0;
    let totalCost = 0;
    let quantity = Number(input.shift());
    let days = Number(input.shift());

    for (let i = 1; i <= days; i++) {
        if (i % 11 == 0) {
            quantity += 2;
        }

        if (i % 2 === 0) {
            totalCost += quantity * 2;
            totalSpirit += 5;
        }

        if (i % 3 == 0) {
            totalSpirit += 13;
            totalCost += (quantity * 5) + (quantity * 3);
        }

        if (i % 5 == 0) {
            totalSpirit += 17;
            totalCost += quantity * 15;
            if (i % 3 == 0) {
                totalSpirit += 30;
            }
        }
        if (i % 10 == 0) {
            totalSpirit -= 20;
            totalCost += 15 + 3 + 5;

            if (i == days) {
                totalSpirit -= 30;
            }
        }
    }

    console.log(`Total cost: ${totalCost}`);
    console.log(`Total spirit: ${totalSpirit}`);
}
solve([3, 20])