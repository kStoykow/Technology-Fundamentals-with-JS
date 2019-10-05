function solve(input) {
    let gifts = input.shift().split(' ');
    let commands = input.shift();

    while (commands != 'No Money') {
        let [command, gift, i] = commands.split(' ');

        if (command == 'OutOfStock') {
            if (gifts.includes(gift)) {
                gifts = gifts.map(e => {
                    if (e == gift) {
                        return e = 'None';
                    } else {
                        return e;
                    }
                });
            }

        } else if (command == 'Required') {      
            let isValid = false;
            if (i >= 0 && i < gifts.length) {
                isValid = true;
            }

            if (isValid) {
                gifts.splice(i, 1, gift);
            }

        } else {
            gifts[gifts.length - 1] = gift;
        }

        commands = input.shift();
    }

    console.log(gifts.filter(e => e != "None").join(' '));
}
solve(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'])