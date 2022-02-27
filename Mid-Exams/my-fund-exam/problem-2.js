function solve(arr) {
    let list = arr.shift().split(' ');
    let n = Number(arr.shift());

    for (let i = 0; i < n; i++) {
        if (arr[i] == 'Reverse') {
            list.reverse();

        } else {
            let token = arr[i].split(' ');

            if (token.includes('Include')) {
                let [c, item] = token;
                list.push(item);

            } else if (token.includes('Remove')) {
                let [, firstLast, count] = token;
                count = Number(count);

                if (list.length >= count) {
                    if (firstLast == 'first') {
                        list.splice(0, count);
                    } else {
                        list.splice(list.length - count, count);
                    }
                }

            } else if (token.includes('Prefer')) {
                let [, i, i2] = token.map(Number);
                if ((i >= 0 && i < list.length) && (i2 >= 0 && i2 < list.length)) {
                    let firstElement = list[i];
                    list.splice(i, 1, list[i2]);
                    list.splice(i2, 1, firstElement);
                }
            }
        }
    }
    console.log(`Coffees:\n${list.join(' ')}`);
}
console.log(solve((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])));
console.log(solve((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])));
// console.log(solve((["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
//     "3",
//     "Include OrdinaryCoffee",
//     "Remove first 1",
//     "Prefer 4 1"])));