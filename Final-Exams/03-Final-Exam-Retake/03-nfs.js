function solve(arr) {
    let n = Number(arr.shift());
    let cars = [];
    let r = '';

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        cars.push({ 'model': car, 'mileage': Number(mileage), 'fuel': Number(fuel) })
    }

    for (const e of arr) {
        if (e == 'Stop' == true) {
            for (const e of cars) {
                r += `${e.model} -> Mileage: ${e.mileage} kms, Fuel in the tank: ${e.fuel} lt.\n`;
            }
            break;
        }

        let [command, car, ...rest] = e.split(' : ');
        let currCar = cars.find(e => e.model == car);

        if (command == 'Drive') {
            let [dist, fuel] = rest.map(Number);
            if (currCar.fuel < fuel) {
                r += 'Not enough fuel to make that ride\n';
            } else {
                currCar.fuel -= fuel;
                currCar.mileage += dist;
                r += `${car} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.\n`;
            }

            if (currCar.mileage >= 100000) {
                r += `Time to sell the ${car}!\n`;
                cars.splice(cars.indexOf(currCar), 1);
            }

        } else if (command == 'Refuel') {
            let fuel = Number(rest[0]);
            let filled = fuel;
            if (currCar.fuel + fuel > 75) {
                filled = 75 - currCar.fuel;
                currCar.fuel = 75;
            } else {
                currCar.fuel += fuel;
            }
            r += `${car} refueled with ${filled} liters\n`;

        } else if (command == 'Revert') {
            let km = Number(rest[0]);
            if (currCar.mileage - km < 10000) {
                currCar.mileage = 10000;
            } else {
                currCar.mileage -= km;
                r += `${car} mileage decreased by ${km} kilometers\n`;
            }
        }
    }
    return r;
}
console.log(solve(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
));