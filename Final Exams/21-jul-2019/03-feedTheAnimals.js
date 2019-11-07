function solve(input) {
    let command = input.shift();
    let animals = {};

    while (command != 'Last Info') {

        if (command.includes('Add')) {
            let [, name, limit, area] = command.split(':');
            if (!animals.hasOwnProperty(name)) {
                animals[name] = {};
                animals[name]['limit'] = Number(limit);
                animals[name]['area'] = area;
            } else {
                animals[name]['limit'] += Number(limit);
            }

        } else {
            let [, name, food] = command.split(':');
            if (animals.hasOwnProperty(name)) {
                animals[name]['limit'] -= food;

                if (animals[name]['limit'] <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animals[name];
                }
            }
        }

        command = input.shift();
    }

    console.log('Animals:');

    Object.entries(animals)
        .sort((a, b) => Object.values(b[1])[0] - Object.values(a[1])[0] || a[0].localeCompare(b[0]))
        .forEach(([name, objValues]) => console.log(`${name} -> ${objValues['limit']}g`));

    console.log('Areas with hungry animals:');

    let areas = {};
    
    for (const key in animals) {
        if (!areas.hasOwnProperty(animals[key]['area'])) {
            areas[animals[key]['area']] = 1;
        } else {
            areas[animals[key]['area']]++;
        }
    }

    Object.entries(areas).sort((a, b) => b[1] - a[1]).forEach(([area, count]) => console.log(`${area} : ${count}`));
}
solve(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info'
])