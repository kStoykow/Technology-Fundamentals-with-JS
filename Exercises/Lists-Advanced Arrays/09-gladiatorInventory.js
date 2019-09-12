function inventory(array) {
    let inventory = array.shift().split(' ');

    for (let getCommands = 0; getCommands < array.length; getCommands++) {
        let command = array[getCommands].split(' ');
        let item = command[1];
        if (command.includes('Buy')) {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }

        } else if (command.includes('Trash')) {
            if (inventory.includes(item)) {
                for (let iOfTrash = 0; iOfTrash < inventory.length; iOfTrash++) {
                    if (inventory[iOfTrash] == item) {
                        inventory.splice(iOfTrash, 1);
                    }
                }
            }

        } else if (command.includes('Repair')) {
            if (inventory.includes(item)) {
                for (let iOfRepair = 0; iOfRepair < inventory.length; iOfRepair++) {
                    if (inventory[iOfRepair] == item) {
                        let repaired = inventory[iOfRepair];
                        inventory.splice(iOfRepair, 1);
                        inventory.push(repaired);
                    }
                }
            }

        } else if (command.includes('Upgrade')) {
            item = item.split('-');
            let game = item[0];

            if (inventory.includes(game)) {
                for (let iOfUpgrade = 0; iOfUpgrade < inventory.length; iOfUpgrade++) {
                    if (inventory[iOfUpgrade] == game) {
                        inventory.splice(iOfUpgrade + 1, 0, item.join(':'));
                        break;
                    }
                }
            }
        }
    }

    console.log(inventory.join(' '));
}