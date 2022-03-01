function solve(data) {
    let acc = data.reduce((a, b) => {
        let [Hero, level, items] = b.split(' / ');
        a.push({
            Hero, level, items
        })
        return a;
    }, []);

    let r = '';

    acc.sort((a, b) => Object.values(a)[1] - Object.values(b)[1])
        .map(obj => {
            Object.entries(obj)
            .map(e => {
                let [k, v] = e;
                if (k == 'Hero') {
                    r += `${k}: ${v}\n`;
                } else {
                    r += `${k} => ${v}\n`;
                }
            })
        });

    return r;
}
console.log(solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]
));