function solve(input) {
    let validOrder = /\%(?<name>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d{1,}[.]?\d+)\$/g;
    let totalMoney = 0;
    let line = input.shift();

    while (line != 'end of shift') {
        if (line.match(validOrder)) {
            let currOrder = validOrder.exec(line);

            let currTotal = currOrder.groups.price * currOrder.groups.count;
            totalMoney += currTotal;
            console.log(`${currOrder.groups.name}: ${currOrder.groups.product} - ${currTotal.toFixed(2)}`);
        }

        line = input.shift();
    }
    
    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])