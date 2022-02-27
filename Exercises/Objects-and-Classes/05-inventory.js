function solve(input) {
    let heroes = [];

    input.forEach(line => {
        let [Hero, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ').sort((a, b) => a.localeCompare(b));
        heroes.push({ Hero, level, items });
    });

    let sorted = heroes.sort((a, b) => a.level - b.level);
    sorted.forEach(obj => {
        console.log(`Hero: ${obj.Hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items.join(', ')}`);
    });

}
solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]
)