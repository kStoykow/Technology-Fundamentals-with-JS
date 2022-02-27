function solve(input) {
    let totalCoins = 0;
    let partySize = Number(input.shift());
    let days = Number(input.shift());

    for (let i = 1; i <= days; i++) {
        if (i % 10 === 0) {
            partySize -= 2;
        }

        if (i % 15 == 0) {
            partySize += 5;
        }
        totalCoins += 50;
        totalCoins -= partySize * 2;

        if (i % 3 == 0) {
            totalCoins -= partySize * 3;
        }

        if (i % 5 == 0) {
            totalCoins += partySize * 20;
            if (i % 3 == 0) {
                totalCoins -= partySize * 2;
            }
        }
    }

    let coinPerCompanion = Math.floor(totalCoins / partySize);
    console.log(`${partySize} companions received ${coinPerCompanion} coins each.`);
}
solve([3, 5])