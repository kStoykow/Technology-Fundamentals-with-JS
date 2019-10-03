function solve(input) {
    let budget = Number(input.pop());
    let items = input[0].split('|');
    let currBudget = budget;
    let list = [];
    let profit = 0;

    for (const item of items) {
        let [type, price] = item.split('->');
        price = Number(price);

        if (type == 'Clothes' && price <= 50 && currBudget >= price) {
            list.push((price * 1.4).toFixed(2));
            currBudget -= price;
            profit += price * 0.4;

        } else if (type == 'Shoes' && price <= 35 && currBudget >= price) {
            list.push((price * 1.4).toFixed(2));
            currBudget -= price;
            profit += price * 0.4;

        } else if (type == 'Accessories' && price <= 20.5 && currBudget >= price) {
            list.push((price * 1.4).toFixed(2));
            currBudget -= price;
            profit += price * 0.4;
        }
    }
    
    console.log(list.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);

    if (currBudget > 0) {
        list.push(currBudget.toFixed(2));
    }

    list = list.reduce((acc, e) => Number(acc) + Number(e));
    if (list >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}
solve(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'])