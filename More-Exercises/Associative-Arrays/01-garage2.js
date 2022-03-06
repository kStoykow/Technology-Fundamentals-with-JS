function solve(input) {
    let garages = [];

    for (const line of input) {
        let [n, carInfo] = line.split(' - ');

        if (garages.find(g => g.n === n) == undefined) {
            garages.push(
                { n, carInfo: [] }
            );
        }

        let currGarage = garages.find(g => g.n === n);
        currGarage.carInfo.push(carInfo);
    }

    let output = '';
    garages.forEach(garage => {
        output += `Garage № ${garage.n}\n`;

        for (let currCar of garage.carInfo) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`;
        }
    });

    return output;
}
console.log(solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
);