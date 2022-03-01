function solve(arr, arr2) {
    let storage = {};
    let myArr = [...arr, ...arr2];
    let r = '';
    for (let i = 0; i < myArr.length; i += 2) {
        let [k, v] = [myArr[i], myArr[i + 1]];
        if (!storage.hasOwnProperty(k)) {
            storage[k] = 0;
        }
        storage[k] += Number(v);
    }

    for (const key in storage) {
        r += `${key} -> ${storage[key]}\n`;
    }
    return r;
}
console.log(
    solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
        ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']));