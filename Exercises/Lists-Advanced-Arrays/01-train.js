function train(data) {
    let arr = data.shift().split(' ').map(Number);
    let max = Number(data.shift());

    for (let i = 0; i < data.length; i++) {
        let token = data[i].split(' ');
        if (token[0].includes('Add')) {
            let [c, n] = token;
            arr.push(Number(n));

        } else {
            let haveSpace = arr.find(e => Number(e) + Number(token[0]) <= max);
            arr[arr.indexOf(haveSpace)] += Number(token[0]);
        }
    }

    return arr.join(' ');
}
console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']));