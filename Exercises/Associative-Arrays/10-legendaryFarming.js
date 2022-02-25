function solve(input) {
    input = input.split(' ');

    let inventory = {
        must: {
            'fragments': 0,
            'motes': 0,
            'shards': 0,
        },
        trash: {}
    };

    for (let i = 0; i < input.length; i += 2) {
        let key = input[i + 1].toLowerCase();
        let value = Number(input[i]);

        if (key == 'shards' || key == 'motes' || key == 'fragments') {
            if (!inventory['must'].hasOwnProperty(key)) {
                inventory['must'][key] = value;
            } else {
                inventory['must'][key] += value;
            }

        } else {
            if (!inventory['trash'].hasOwnProperty(key)) {
                inventory['trash'][key] = value;
            } else {
                inventory['trash'][key] += value;
            }
        }

        if (inventory['must']['fragments'] >= 250) {
            inventory['must']['fragments'] -= 250;
            console.log('Valanyr obtained!');
            break;

        } else if (inventory['must']['motes'] >= 250) {
            inventory['must']['motes'] -= 250;
            console.log('Dragonwrath obtained!');
            break;

        } else if (inventory['must']['shards'] >= 250) {
            inventory['must']['shards'] -= 250;
            console.log('Shadowmourne obtained!');
            break;
        }
    }

    for (const key in inventory) {
        if (key == 'must') {
            Object.entries(inventory[key])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(([material, quantity]) => {
                    console.log(`${material}: ${quantity}`);
                });

        } else {
            Object.entries(inventory[key])
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([material, quantity]) => {
                    console.log(`${material}: ${quantity}`);
                });
        }
    }
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');