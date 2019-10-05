function solve(input) {
    let paintings = input.shift().split(' ');
    let commands = input.shift();

    while (commands != "END") {
        let [comand, token1, token2] = commands.split(' ');

        if (comand == 'Change') {
            if (paintings.includes(token1)) {
                let indexOf = paintings.indexOf(token1);
                paintings[indexOf] = token2;
            }

        } else if (comand == 'Hide') {
            if (paintings.includes(token1)) {
                paintings = paintings.filter(e => e != token1);
            }

        } else if (comand == 'Switch') {
            if (paintings.includes(token1) && paintings.includes(token2)) {
                let indexOfFirst = paintings.indexOf(token1);
                let indexOfSecond = paintings.indexOf(token2);
                let toSwap = paintings[indexOfFirst];
                paintings[indexOfFirst] = paintings[indexOfSecond];
                paintings[indexOfSecond] = toSwap;
            }

        } else if (comand == 'Insert') {
            let isValid = false;
            if (token1 >= 0 && token1 < paintings.length - 1) {
                isValid = true;
            }

            if (isValid) {
                let place = Number(token1) + 1;
                paintings.splice(place, 0, token2);
            }

        } else {
            paintings.reverse();
        }

        commands = input.shift();
    }

    console.log(paintings.join(' '));
}
solve(['115 115 101 114 73 111 116 75',
    'Insert 6 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse',
    'Change 73 70',
    'Insert 10 85',
    'Reverse',
    'Change 115 40',
    'END']);