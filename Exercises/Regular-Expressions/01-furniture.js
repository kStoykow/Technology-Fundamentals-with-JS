function solve(data) {
    let arr = [];
    let totalPrice = 0;
    let validPurchase = />>\w+<<\d+[.]?\d+\!\d+/g;

    function outputParse(arr) {
        let result = 'Bought furniture:\n';
        arr.length > 0 ? result += `${arr.join('\n')}\n` : result;
        result += `Total money spend: ${totalPrice.toFixed(2)}`;
        return result;
    }

    for (const e of data) {
        if (e == 'Purchase' == true) {
            break;
        }
        if (e.match(validPurchase)) {
            let name = e.match(/[A-Z][A-Za-z]+/g)[0];
            let price = e.match(/\d+\.?\d+/g)[0];
            let quantity = e.match(/!\d+/g)[0].substring(1);
            arr.push(name);
            totalPrice += Number(price) * Number(quantity);
        }
    }

    return outputParse(arr);
}
console.log(
    solve([
        '>>Sofa<<100.22!32',
        '>>TV<<12!2',
        '>>TV<<200!1',
        '>Invalid<<2!5',
        'Purchase',
    ])
);
