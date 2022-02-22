function getPrice(p, quantity) {
    return calcPrice(p, quantity).toFixed(2);

    function calcPrice(product, quantity) {
        if (product === 'coffee') {
            return 1.50 * quantity;
        }

        if (product === 'water') {
            return 1.00 * quantity;
        }

        if (product === 'coke') {
            return 1.40 * quantity;
        }

        if (product === 'snacks') {
            return 2.00 * quantity;
        }
    }
}
console.log(getPrice('coke', 3.223));