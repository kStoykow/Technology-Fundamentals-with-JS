function solve(arr) {
    let n = Number(arr.shift());
    let heroes = [];
    let r = '';
    
    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = arr.shift().split(' ');
        heroes.push({ 'name': name, 'hp': Number(hp), 'mana': Number(mp) });
    }

    for (const e of arr) {
        if (e == 'End' == true) {
            break;
        }

        let [command, hero, ...rest] = e.split(' - ');
        let currHero = heroes.find(e => e.name == hero);
        if (command == 'CastSpell') {
            let [mana, spell] = rest;
            if (currHero.mana >= Number(mana)) {
                currHero.mana -= Number(mana);
                r += `${hero} has successfully cast ${spell} and now has ${currHero.mana} MP!\n`;
            } else {
                r += `${hero} does not have enough MP to cast ${spell}!\n`;
            }

        } else if (command == 'TakeDamage') {
            let [dmg, enemy] = rest;
            if (currHero.hp > Number(dmg)) {
                currHero.hp -= Number(dmg);
                r += `${hero} was hit for ${dmg} HP by ${enemy} and now has ${currHero.hp} HP left!\n`;
            } else {
                heroes.splice(heroes.indexOf(currHero), 1);
                r += `${hero} has been killed by ${enemy}!\n`;
            }

        } else if (command == 'Recharge') {
            let refill = Number(rest);
            if (currHero.mana + refill > 200) {
                refill = 200 - currHero.mana;
                currHero.mana = 200;
            } else {
                currHero.mana += refill;
            }
            r += `${hero} recharged for ${refill} MP!\n`;

        } else if (command == 'Heal') {
            let refill = Number(rest);
            if (currHero.hp + refill > 100) {
                refill = 100 - currHero.hp;
                currHero.hp = 100;
            } else {
                currHero.hp += refill;
            }
            r += `${hero} healed for ${refill} HP!\n`;
        }
    }

    for (const e of heroes) {
        r += `${e.name}\n  HP: ${e.hp}\n  MP: ${e.mana}\n`;
    }
    return r;
}
console.log(solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']));