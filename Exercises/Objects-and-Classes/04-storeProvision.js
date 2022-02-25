function solve(arr, arr2) {
    let storage = {};
    let myArr = [...arr, ...arr2];
    for (let i = 0; i < myArr.length; i += 2) {
        let [k, v] = [myArr[i], myArr[i + 1]];
        if (!storage.hasOwnProperty(k)) {
            storage[k] = 0;
        }

        storage[k] += Number(v);
    }

    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}
solve(['Chips', '5'],
    ['Flour', '44', 'Flour', '44', 'Flour', '44'])