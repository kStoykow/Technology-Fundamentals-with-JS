function solve(stock, order) {
    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        products[stock[i]] = Number(stock[i + 1]);
    }

    for (let l = 0; l < order.length; l += 2) {
        if (!products.hasOwnProperty(order[l])) {
            products[order[l]] = Number(order[l + 1]);
        } else {
            products[order[l]] += Number(order[l + 1]);
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])