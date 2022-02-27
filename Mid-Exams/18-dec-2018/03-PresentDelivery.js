function solve(input) {
    let lastPosition = 0;
    let current = 0;
    let houses = input.shift().split('@');
    let command = input.shift();

    while (command != 'Merry Xmas!') {
        command = command.split(' ');
        let jump = Number(command[1]);
        current = lastPosition + jump;

        if (current > houses.length - 1) {
            while (current > houses.length - 1) {
                current = Math.abs(current - houses.length);
            }
        }

        if (houses[current] <= 0) {
            console.log(`House ${current} will have a Merry Christmas.`);
        } else {
            houses[current] -= 2;
        }

        lastPosition = current;
        command = input.shift();
    }

    console.log(`Santa's last position was ${lastPosition}.`);

    if (houses.every(e => e <= 0)) {
        console.log(`Mission was successful.`);
    } else {
        let failed = houses.filter(e => e > 0);
        console.log(`Santa has failed ${failed.length} houses.`);
    }
}
solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Merry Xmas!'])