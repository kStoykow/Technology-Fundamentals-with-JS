function solve(arr) {
    let btcPrice = 11949.16;
    let goldPrice = 67.51;
    let totalBtc = 0;
    let day = 0;
    let money = 0;
    let purchaseDay = 0
    let r = '';
    for (let i = 0; i < arr.length; i++) {
        let goldGrams = Number(arr[i]);
        day++

        if (day % 3 === 0) {
            goldGrams *= 0.7;
        }

        money += (goldGrams * goldPrice);

        if (money >= btcPrice && purchaseDay == 0) {
            purchaseDay = day;
        }
    }

    totalBtc = Math.trunc(money / btcPrice);
    money -= totalBtc * btcPrice;
    r += `Bought bitcoins: ${totalBtc}\n`;

    if (totalBtc !== 0) {
        r += `Day of the first purchased bitcoin: ${purchaseDay}\n`;
    }

    r += `Left money: ${money.toFixed(2)} lv.`;
    return r;
}

console.log(solve([100, 200, 300]));