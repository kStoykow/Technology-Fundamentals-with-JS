function solve(data) {
    let obj = {};
    function objHandler(string) {
        if (string.includes('arrives')) {
            let [l] = string.split(' arrives');
            if (obj.hasOwnProperty(l) == false) {
                obj[l] = { 'total': 0 };
            }

        } else if (string.includes('+')) {
            let [army, c] = string.split(' + ');
            for (const key in obj) {
                if (obj[key].hasOwnProperty(army) == true) {
                    obj[key][army] += Number(c);
                    obj[key]['total'] += Number(c);
                }
            }
        } else if (string.includes('defeated')) {
            let [l] = string.split(' defeated');
            if (obj.hasOwnProperty(l) == true) {
                delete obj[l];
            }
        } else {
            let [l, army] = string.split(': ');
            if (obj.hasOwnProperty(l) == true) {
                let [k, v] = army.split(', ');
                obj[l][k] = Number(v);
                obj[l]['total'] += Number(v);
            }
        }
    }
    const sortByTotalArmy = (a, b) => (b[1].total - a[1].total);
    function outputParse([name, army]) {
        let armySort = Object.entries(army).filter(e => e[0] != 'total').sort((a, b) => b[1] - a[1]);
        if (armySort.length > 0) {
            return `${name}: ${army.total}\n>>> ${armySort.map(e => e.join(' - ')).join('\n>>> ')}`;
        }
        return `${name}: ${army.total}\n`;
    }


    for (const e of data) {
        objHandler(e);
    }

    return Object.entries(obj)
        .sort(sortByTotalArmy)
        .map(outputParse)
        .join('\n');
}
console.log(solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Legion + 400',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Retix, 3205',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
]));