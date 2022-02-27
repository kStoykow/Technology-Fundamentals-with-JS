function solve(input) {
    let days = input.shift();
    let budget = input.shift();
    let groupSize = input.shift();
    let fuelPerKmPrice = input.shift();
    let foodPricePerP = input.shift();
    let roomPricePerP = input.shift();

    let totalRoomPrice = (roomPricePerP * groupSize) * days
    let totalFood = foodPricePerP * groupSize * days;
    let isReached = true;

    if (groupSize > 10) {
        totalRoomPrice *= 0.75;
    }
    let currExpenses = (totalRoomPrice + totalFood);

    for (let i = 0; i < input.length; i++) {
        let day = i + 1;
        let km = input[i];
        currExpenses += km * fuelPerKmPrice;

        if (day % 3 == 0 || day % 5 == 0) {
            currExpenses = currExpenses * 1.4;
        } else if (day % 7 == 0) {
            currExpenses -= currExpenses / groupSize;
        }

        if (budget < currExpenses) {
            console.log(`Not enough money to continue the trip. You need ${(currExpenses - budget).toFixed(2)}$ more.`);
            isReached = false;
            break;
        }
    }
    if (isReached) {
        console.log(`You have reached the destination. You have ${(budget - currExpenses).toFixed(2)}$ budget left.`);

    }
}
solve([7,
    12000,
    5,
    1.5,
    10,
    20,
    512,
    318,
    202,
    154,
    222,
    108,
    123,
])