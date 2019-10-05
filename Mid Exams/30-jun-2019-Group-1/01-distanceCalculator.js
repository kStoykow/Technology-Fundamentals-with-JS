function solve(input) {
    let steps = input.shift();
    let cmOfStep = input.shift();
    let goalMeters = input.shift();

    let shortSteps = Math.trunc(steps / 5);
    let shorterDistance = (shortSteps * cmOfStep) * 0.7;
    let totalDistance = ((steps -shortSteps) * cmOfStep) + shorterDistance;

    console.log(`You travelled ${(totalDistance/goalMeters).toFixed(2)}% of the distance!`);
}
solve([100  , 2, 1])