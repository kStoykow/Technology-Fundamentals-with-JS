function solve(input) {
    let parking = new Map();
    input.forEach(car => {
        let [direction, number] = car.split(', ');
        if (direction == 'IN') {
            parking.set(number);

        } else {
            parking.delete(number)
        }
    });

    let sortedCars = [...parking].sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCars.length != 0) {
        sortedCars.forEach(kvp => {
            console.log(kvp[0]);
        });

    } else {
        console.log('Parking Lot is Empty');
    }
}
solve([
    'IN, CA1234TA',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'OUT, CA2866HI',
]
)