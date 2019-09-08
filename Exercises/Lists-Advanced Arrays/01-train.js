function trainProgram(input) {
    let wagon = input.shift().split(' ');
    let maxPassengers = Number(input.shift());
    let newWagons = wagon.map(Number);

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        if (command.length > 1) {
            newWagons.push(Number(command[1]));

        } else {
            for (let j = 0; j < newWagons.length; j++) {
                if (Number(newWagons[j] + Number(command)) <= maxPassengers) {
                    newWagons[j] += Number(command);
                    break;
                }
            }
        }

    }

    console.log(newWagons.join(' '));
}