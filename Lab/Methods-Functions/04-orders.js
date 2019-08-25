function getPrice(product, quantity) {
    let totalPrice = calculateTotalPrice();
    console.log(totalPrice.toFixed(2));

    function calculateTotalPrice() {
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