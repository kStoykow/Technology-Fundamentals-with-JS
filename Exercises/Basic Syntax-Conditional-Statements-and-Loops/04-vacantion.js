function vacantion(n, group, day) {
    let price = 0;
    const daysMap = {
        'Friday': (price, group) => {
            if (group === 'Students') {
                return price = 8.45;
            } else if (group === 'Business') {
                return price = 10.9;
            } else if (group == 'Regular') {
                return price = 15;
            }
        },
        'Saturday': (price, group) => {
            if (group === 'Students') {
                return price = 9.8;
            } else if (group === 'Business') {
                return price = 15.6;
            } else if (group == 'Regular') {
                return price = 20;
            }
        },
        'Sunday': (price, group) => {
            if (group === 'Students') {
                return price = 10.46;
            } else if (group === 'Business') {
                return price = 16;
            } else if (group == 'Regular') {
                return price = 22.5;
            }
        }
    }
    price = daysMap[day](price, group);
    let totalPrice = price * n;

    const groupMap = {
        'Students': (totalPrice, n, price) => {
            if (n >= 30) {
                return totalPrice *= 0.85;
            }
            return totalPrice;
        },
        'Business': (totalPrice, n, price) => {
            if (n >= 100) {
                return totalPrice -= 10 * price;
            }
            return totalPrice;
        },
        'Regular': (totalPrice, n, price) => {
            if (n >= 10 && n <= 20) {
                return totalPrice *= 0.95;
            }
            return totalPrice;
        }
    }

    totalPrice = groupMap[group](totalPrice, n, price);

    return `Total price: ${totalPrice.toFixed(2)}`;
}
console.log(
    vacantion(120,
        "Business",
        "Sunday")
);