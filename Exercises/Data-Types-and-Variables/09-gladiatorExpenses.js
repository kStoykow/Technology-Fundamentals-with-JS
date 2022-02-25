function repairPrice(fights, helmP, swordP, shieldP, armorP) {
    let totalPrice = 0;

    for (let i = 1; i <= fights; i++) {
        if (i % 2 === 0) {
            totalPrice += helmP;
        }
        if (i % 3 === 0) {
            totalPrice += swordP;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalPrice += shieldP;
        }
        if (i % 12 == 0) {
            totalPrice += armorP;
        }
    }
    return `Gladiator expenses: ${totalPrice.toFixed(2)} aureus`;
}
console.log(repairPrice(23, 12.5, 21.5, 40, 200));