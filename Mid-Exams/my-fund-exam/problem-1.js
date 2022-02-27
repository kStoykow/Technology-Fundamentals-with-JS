function solve(input) {
    let [days, ppl, energy, water, food, ...arr] = input.map(Number);
    let totalWater = ppl * days * water;
    let totalFood = ppl * days * food;

    for (let i = 1; i <= days; i++) {
        energy -= arr[i - 1];

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }

        if (i % 2 == 0) {
            energy *= 1.05;
            totalWater *= 0.7;
        }

        if (i % 3 == 0) {
            totalFood -= totalFood / ppl;
            energy *= 1.1;
        }
    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}
console.log(solve((["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])));
// console.log(solve((["12",
//     "6",
//     "4430",
//     "9.8",
//     "5.5",
//     "620.3",
//     "840.2",
//     "960.1",
//     "220",
//     "340",
//     "674",
//     "365",
//     "345.5",
//     "212",
//     "412.12",
//     "258",
//     "496"])));