function vacantion(number, group, day) {
    let price = 0;
    if (day === 'Friday') {
        if (group === 'Students') {
            price = 8.45;
        } else if (group === 'Business') {
            price = 10.9;
        } else {
            price = 15;
        }

    } else if (day === 'Saturday') {
        if (group === 'Students') {
            price = 9.8;
        } else if (group === 'Business') {
            price = 15.6;
        } else {
            price = 20;
        }

    } else {
        if (group === 'Students') {
            price = 10.46;
        } else if (group === 'Business') {
            price = 16;
        } else {
            price = 22.5;
        }
    }
    let totalPrice = price * number;

    if (group === 'Students' && number >= 30) {
        totalPrice *= 0.85;
    } else if (group === 'Business' && number >= 100) {
        totalPrice -= 10 * price;
    } else if (group === 'Regular' && (number >= 10 && number <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}