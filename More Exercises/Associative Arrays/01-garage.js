function solve(input) {
    let garagesMap = new Map()

    for (let line of input) {
        let [garage, currCar] = line.split(' - ');
        let carsInGarage = [];

        if (!garagesMap.has(garage)) {
            carsInGarage.push(currCar);
            garagesMap.set(garage, carsInGarage);

        } else {
            carsInGarage = garagesMap.get(garage);
            carsInGarage.push(currCar);
            garagesMap.set(garage, carsInGarage);
        }
    }

    let garageEntries = [...garagesMap.entries()];
    let output = '';

    for (let [garageNum, cars] of garageEntries) {
        output += `Garage № ${garageNum}\n`;

        for (let currCar of cars) {
            while (currCar.includes(': ')) {
                currCar = currCar.replace(': ', ' - ');
            }

            output += `--- ${currCar}\n`;
        }
    }

    console.log(output);
}
solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])