function solve(input) {
    let pattern = />>(?<name>\w+)<<(?<price>\d+[.]?\d+)!(?<quantity>\d+)/g
    let totalMoney = 0;
    let furnitures = [];
    let line = input.shift();

    while (line != 'Purchase') {
        if (line.match(pattern)) {
            let result = pattern.exec(line);
            furnitures.push(result.groups.name);
            totalMoney += (result.groups.price * result.groups.quantity);
        }

        line = input.shift();
    }

    console.log('Bought furniture:');
    for (const item of furnitures) {
        console.log(item);
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
solve(['>>Sofa<<100.22!3',
    '>>TV<<200.1!2',
    '>>TV<<200.1!1',
    '>Invalid<<!5',
    'Purchase',
])