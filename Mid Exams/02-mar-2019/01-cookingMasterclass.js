function solve(input) {
    let budget = Number(input.shift());
    let students = Number(input.shift());
    let flourPrice = Number(input.shift());
    let eggPrice = Number(input.shift());
    let apronPrice = Number(input.shift());
    let freeSet = 0;
    for (let i = 1; i <= students; i++) {
        if (i % 5 == 0) {
            freeSet++;
        }
    }

    let totalCost = ((eggPrice * 10) * students) + (flourPrice * (students - freeSet)) + (apronPrice * Math.ceil(students * 1.2));
    if (budget >= totalCost) {
        console.log(`Items purchased for ${(totalCost).toFixed(2)}$.`);
    } else {
        console.log(`${(totalCost - budget).toFixed(2)}$ more needed.`);
    }
}
solve([50,
    2,
    1.0,
    0.10,
    10.0,
])