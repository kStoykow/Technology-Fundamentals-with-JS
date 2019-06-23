function repairPrice(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let shieldBrokes = 0;
    let totalPrice = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalPrice += helmetPrice;
        }

        if (i % 3 === 0) {
            totalPrice += swordPrice;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            totalPrice += shieldPrice;
            shieldBrokes++;
        }

        if (shieldBrokes == 2) {
            totalPrice += armorPrice;
            shieldBrokes = 0;
        }
    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}