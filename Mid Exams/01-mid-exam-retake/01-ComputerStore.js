function solve(arr,) {
    let command = arr.shift();
    let partsPrice = 0;
    let result = '';

    while (command != 'regular' && command != 'special') {
        let price = Number(command);
       
        if (price < 0 || price == -0) {
            result += 'Invalid price!\n';
        } else {
            partsPrice += price;
        }

        command = arr.shift();
    }
    let taxes = partsPrice * 0.2;
    let totalPrice = partsPrice + taxes;

    if (totalPrice == 0) {
        if (result != '') {
            return result += 'Invalid order!';
        }

        result = 'Invalid order!';
        return result;
    }

    const customersMap = {
        'special': (e) => e *= 0.9,
        'regular': (e) => e
    }

    totalPrice = customersMap[command](totalPrice);
  
    result += `Congratulations you've just bought a new computer!\nPrice without taxes: ${partsPrice.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`;
    return result;
}
console.log(solve(['1', '5','special'])); 