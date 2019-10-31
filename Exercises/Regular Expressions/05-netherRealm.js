function solve(input) {
    let splitPattern = /[, ]+/g;
    let demonsArr = input[0].split(splitPattern);
    let demons = {};
    let healthPattern = /[^0-9.\/+*-]/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    let dmgPattern = /\*|\//g;

    for (const demon of demonsArr) {
        let hp = 0;
        let dmg = 0;
        if (demon.match(healthPattern) != null) {
            for (const char of demon.match(healthPattern)) {
                hp += char.charCodeAt(0);
            }
        }

        let digits = demon.match(sumPattern);

        if (digits != null) {
            for (const digit of digits) {
                dmg += Number(digit);
            }
        }

        let subtractOrMultiply = demon.match(dmgPattern);

        if (subtractOrMultiply != null) {
            for (const operand of subtractOrMultiply) {
                if (operand == '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            }
        }

        demons[demon] = {};
        demons[demon]['health'] = hp;
        demons[demon]['damage'] = dmg;
    }

    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, valuesObj] of sorted) {
        console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
    }
}
solve(['aZ?--123asd", Gos/ho, M3ph-0.5s-0.5t0.0**, Azazel,m15*/c-5.0'])