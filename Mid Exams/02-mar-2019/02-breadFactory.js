function solve(input) {
    let energy = 100;
    let coins = 100;
    let workDay = input[0].split('|');

    for (const job of workDay) {
        let [event, value] = job.split('-');
        value = Number(value);

        if (event == 'rest') {
            let currEnergy = energy;
            energy += value;

            if (energy > 100) {
                energy = 100;
            }

            console.log(`You gained ${energy - currEnergy} energy.`);
            console.log(`Current energy: ${energy}.`);

        } else if (event == 'order') {

            if (energy >= 30) {
                coins += value;
                energy -= 30;
                console.log(`You earned ${value} coins.`);
            } else {
                energy += 50;
                console.log('You had to rest!');
            }

        } else {
            if (coins - value > 0) {
                coins -= value;
                console.log(`You bought ${event}.`);
            } else {
                console.log(`Closed! Cannot afford ${event}.`);
                return;
            }
        }
    }

    console.log('Day completed!');
    console.log(`Coins: ${coins}`);
    console.log(`Energy: ${energy}`);
}
solve(['order-10|rest-10|order-10|order-10|flour-100|order-100|oven-100|order-1000'])