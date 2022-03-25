function solve(data) {
    let n = Number(data.shift());
    let arr = [];
    let r = '';

    for (let i = 0; i < n; i++) {
        let [name, rarity] = data.shift().split('<->');
        arr.push({ 'name': name, 'rarity': Number(rarity), 'rating': [] });
    }

    for (const e of data) {
        if (e == 'Exhibition' == true) {
            break;
        }

        let [command, plant] = e.split(': ');
        if (command == 'Rate') {
            let [name, rating] = plant.split(' - ');
            let currPlant = arr.find(e => e.name == name);
            if (currPlant != undefined) {
                currPlant['rating'].push(Number(rating));
            } else {
                r += 'error\n';
            }

        } else if (command == 'Update') {
            let [name, newRarity] = plant.split(' - ');
            let currPlant = arr.find(e => e.name == name);
            if (currPlant != undefined) {
                currPlant['rarity'] = Number(newRarity);
            } else {
                r += 'error\n';
            }

        } else if (command == 'Reset') {
            let currPlant = arr.find(e => e.name == plant);
            if (currPlant != undefined) {
                currPlant['rating'] = [];
            } else {
                r += 'error\n';
            }
        }
    }

    r += 'Plants for the exhibition:\n';
    for (const obj of arr) {
        r += `- ${obj.name}; Rarity: ${obj.rarity}; Rating: ${(obj.rating.length == 0 ? 0 : obj.rating.reduce((a, b) => a + b, 0) / obj.rating.length).toFixed(2)}\n`;
    }
    return r;
}
console.log(solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woosdii - 5",
    "Reset: Arnoldii",
    "Exhibition"]));