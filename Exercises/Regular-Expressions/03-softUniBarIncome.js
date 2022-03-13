function solve(data) {
    let validDataPattern = /\%(?<name>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d{1,}[.]?\d+)\$/g;
    let total = 0;
    let r = '';

    for (const line of data) {
        if (line == 'end of shift' == true) {
            break;
        }

        for (const match of line.matchAll(validDataPattern)) {
            r += `${match.groups.name}: ${match.groups.product} - ${(match.groups.price * match.groups.count).toFixed(2)}\n`;
            total += match.groups.price * match.groups.count;
        }
    }

    r += `Total income: ${total.toFixed(2)}`;
    return r;
}
console.log(solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    'end of shift']));