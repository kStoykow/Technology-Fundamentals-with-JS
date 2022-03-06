function solve(data) {
    let garage = data.reduce((a, b) => {
        let [n, carInfo] = b.split(' - ');
        let kvps = carInfo.split(', ').map(x => x.split(': '));
        let car = {};

        if (a.hasOwnProperty(n) == false) {
            a[n] = [];
        }
        kvps.map(([k, v]) => car[k] = v);
        a[n].push(car);

        return a;
    }, {});

    const kvpParse = kvp => kvp.join(' - ');
    const carsParse = obj => `--- ${Object.entries(obj).map(kvpParse).join(', ')}`;
    const outputParse = ([n, cars]) => `Garage № ${n}\n${cars.map(carsParse).join('\n')}`;

    return Object.entries(garage)
        .map(outputParse)
        .join('\n');
}
console.log(solve(
    ['1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
));