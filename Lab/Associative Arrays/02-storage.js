function solve(input) {
    let storage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');
        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            let currQuantity = storage.get(product);
            storage.set(product, Number(quantity) + Number(currQuantity));
        }
    }

    for (const key of storage) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])