function farmHandler(data) {
    data = data.split(' ');
    let value = { 'shards': 0, 'motes': 0, 'fragments': 0 };
    let junk = {};

    const legendary = {
        'shards': 'Shadowmourne',
        'fragments': 'Valanyr',
        'motes': 'Dragonwrath',
    }
    const objFiller = {
        true: (value, _, k, v) => {
            value[k] += v;
            return value;
        },
        false: (_, junk, k, v,) => {
            if (junk.hasOwnProperty(k) == false) {
                junk[k] = 0;
            }
            junk[k] += v;
            return junk;
        }
    }
    let r = '';

    for (let i = 0; i < data.length; i += 2) {
        let [v, k] = [Number(data[i]), data[i + 1].toLocaleLowerCase()];
        objFiller[value.hasOwnProperty(k)](value, junk, k, v);
        if (value[k] >= 250) {
            r += `${legendary[k]} obtained!\n`;
            value[k] -= 250;
            break;
        }
    }

    return r += `${Object.entries(value)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => x.join(': '))
        .join('\n')}\n`
        +
        Object.entries(junk)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(x => x.join(': '))
            .join('\n');
}
console.log(farmHandler(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
));