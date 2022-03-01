function solve(arr) {
    arr.reduce((a, b) => {
        let [k, v] = b.split(' : ');
        a[k] = v;
        return a;
    }, {});

    let sorted = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).map(tuple => tuple.join(': '));

    let buffer = sorted[0].charAt(0);
    let r = `${buffer}\n`;

    sorted.forEach(e => {
        if (e[0] != buffer) {
            buffer = e[0];
            r += `${buffer}\n${e}\n`;
        } else {
            r += `${e}\n`;
        }
    });

    return r;
}
console.log(
    solve(['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Boisler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]))