function solve(data) {
    return Object.entries(data.reduce((a, b) => {
        let [k, v] = b.split(' ');
        a[k] = v;
        return a;
    }, {}))
        .map(([k, v] = e) => `${k} -> ${v}`).join('\n');
}
console.log(
    solve(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'])
);