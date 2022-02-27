function solve(arr) {
    let inventory = arr[0].split('|');
    let commands = arr.slice(1);
    let result = '';

    for (let i = 0; i < commands.length; i++) {
        let currCommand = commands[i].split(' ');

        if (currCommand == 'Yohoho!') {
            if (inventory.length > 0) {
                result += `Average treasure gain: ${((inventory.reduce((agg, element) => agg + element.length, 0)) / inventory.length).toFixed(2)} pirate credits.\n`;
                return result;
            } else {
                result += 'Failed treasure hunt.';
                return result;
            }

        } else if (currCommand.includes('Loot')) {
            inventory.unshift(...currCommand.slice(1).filter(e => !inventory.includes(e)).reverse());

        } else if (currCommand.includes('Drop')) {
            let i = Number(currCommand[1]);

            if (inventory[i] != undefined) {
                inventory.push(inventory.splice(i, 1)[0]);
            }

        } else if (currCommand.includes('Steal')) {
            let count = Number(currCommand[1]);
            result += `${inventory.splice((inventory.length >= count ? (inventory.length - count) : 0), count).join(', ')}\n`;
        }
    }
}

console.log(solve(['Gold|Silver|Bronze|Medallion|Cup',
    'Steal 3',
    'Yohoho!']));