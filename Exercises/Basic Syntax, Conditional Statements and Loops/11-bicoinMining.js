function solve(input) {
    let bitcoinPrice = 11949.16;
    let oneGramOfGold = 67.51;
    let totalBitcoins = 0;
    let dayCounter = 0;
    let money = 0;
    let purchaseDay = 0

    for (let i = 0; i < input.length; i++) {
        let currGoldGram = Number(input[i]);
        dayCounter++

        if (dayCounter % 3 === 0) {
            currGoldGram *= 0.7;
        }

        money += (currGoldGram * oneGramOfGold);

        if (money >= bitcoinPrice && purchaseDay == 0) {
            purchaseDay = dayCounter;
        }
    }

    totalBitcoins = Math.trunc(money / bitcoinPrice);
    money -= totalBitcoins * bitcoinPrice;
    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if (totalBitcoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${purchaseDay}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}