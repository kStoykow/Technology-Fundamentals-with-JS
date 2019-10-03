function solve(input) {
    let inventory = input.shift().split('|');
    input.pop();

    input.forEach(e => {
        e = e.split(' ');

        if (e.includes('Loot')) {
            e.shift();

            for (let i = 0; i < e.length; i++) {
                if (!inventory.includes(e[i])) {
                    inventory.unshift(e[i]);
                }
            }

        } else if (e.includes('Drop')) {
            let [toDo, i] = e;
            if (inventory[i]) {
                let dropped = inventory[i];
                inventory.splice(i, 1);
                inventory.push(dropped);
            }

        } else {
            let [toDo, count] = e;
            let stolen;
            if (inventory.length > count) {
                stolen = inventory.splice(inventory.length - count);
            } else {
                stolen = inventory.splice(0);
            }
            console.log(stolen.join(', '));
        }
    });

    let avg = 0;
    for (const item of inventory) {
        avg += item.length;
    }

    if (inventory.length) {
        avg /= inventory.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
solve(['Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 10',
    'Yohoho!'])