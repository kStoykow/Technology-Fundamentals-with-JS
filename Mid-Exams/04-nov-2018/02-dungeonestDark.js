function solve(input) {
    let hp = 100;
    let coins = 0;
    let bestRoom = 1;
    let isDead = false;
    let dungeon = input[0].split('|');

    for (const room of dungeon) {
        let [quest, value] = room.split(' ');

        if (quest == 'potion') {
            bestRoom++;
            let currentHp = hp;
            hp += Number(value);
            if (hp > 100) {
                hp = 100;
            }

            console.log(`You healed for ${hp - currentHp} hp.`);
            console.log(`Current health: ${hp} hp.`);

        } else if (quest == 'chest') {
            bestRoom++;
            console.log(`You found ${value} coins.`);
            coins += Number(value);

        } else {
            hp -= value;
            if (hp > 0) {
                bestRoom++;
                console.log(`You slayed ${quest}.`);
            } else {
                console.log(`You died! Killed by ${quest}.`);
                isDead = true;
                break;
            }
        }
    }

    if (isDead) {
        console.log(`Best room: ${bestRoom}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])