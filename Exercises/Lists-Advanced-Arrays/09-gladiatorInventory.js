function inventoryHandler(arr) {
    let inventory = arr.shift().split(' ').map(String);
    const commandsMap = {
        Buy: (arr, e) => {
            if (!arr.includes(e)) {
                arr.push(e)
            }
            return arr;
        },
        Trash: (arr, e) => {
            if (arr.indexOf(e) !== -1) {
                arr.splice(arr.indexOf(e), 1);
            }
            return arr;
        },
        Repair: (arr, e) => {
            if (arr.indexOf(e) !== -1) {
                arr.push(arr.splice(arr.indexOf(e), 1));
            }
            return arr;
        },
        Upgrade: (arr, ...tuple) => {
            let searched = tuple[0];
            let upgrade = tuple[1];
            if (arr.indexOf(searched) !== -1) {
                arr.splice(arr.indexOf(searched) + 1, 0, `${searched}:${upgrade}`);
            }
            return arr;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ');
        let command = token[0];
        let item = token[1].split('-');
        inventory = commandsMap[command](inventory, ...item);
    }
    return inventory.join(' ');
}
console.log(inventoryHandler([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']));