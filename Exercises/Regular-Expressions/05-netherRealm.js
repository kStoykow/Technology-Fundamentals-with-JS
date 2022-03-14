// function solve(input) {
//     let splitPattern = /[, ]+/g;
//     let healthPattern = /[^0-9.\/+*-]/g;
//     let sumPattern = /[+-]?\d+\.?\d*/g;
//     let dmgPattern = /\*|\//g;
//     let demonsArr = input.split(splitPattern);
//     let demons = {};

//     for (const demon of demonsArr) {
//         let hp = 0;
//         let dmg = 0;
//         if (demon.match(healthPattern) != null) {
//             for (const char of demon.match(healthPattern)) {
//                 hp += char.charCodeAt(0);
//             }
//         }

//         let digits = demon.match(sumPattern);

//         if (digits != null) {
//             for (const digit of digits) {
//                 dmg += Number(digit);
//             }
//         }

//         let subtractOrMultiply = demon.match(dmgPattern);

//         if (subtractOrMultiply != null) {
//             for (const operand of subtractOrMultiply) {
//                 if (operand == '*') {
//                     dmg *= 2;
//                 } else {
//                     dmg /= 2;
//                 }
//             }
//         }

//         demons[demon] = {};
//         demons[demon]['health'] = hp;
//         demons[demon]['damage'] = dmg;
//     }

//     let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
//     for (const [name, valuesObj] of sorted) {
//         console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
//     }
// }
// console.log(solve('M3ph-0.5s-0.5t0.0**'));


function solve(str) {
    let hpPattern = /[^0-9.\/+*-]/g;
    let digitsPattern = /[+-]?\d+[.]?\d*/g;
    let delimitersPattern = /\*|\//g;
    let names = str.split(/[, ]+/g).sort((a, b) => a.localeCompare(b));

    function healthCalc(pattern, str) {
        let hp = 0;
        if (str.match(pattern) != null) {
            for (const ch of str.match(pattern)) {
                hp += ch.charCodeAt(0);
            }
        }
        return hp;
    }
    function digitsSum(pattern, str) {
        let dmg = 0;
        if (str.match(pattern) != null) {
            for (const n of str.match(pattern)) {
                dmg += Number(n);
            }
        }
        return dmg;
    }
    function totalDmgCalc(pattern, str, dmg) {
        const delimiterMap = {
            '/': x => x / 2,
            '*': x => x * 2
        }
        if (str.match(pattern) != null) {
            for (const e of str.match(pattern)) {
                delimiterMap[e](dmg);
            }
        }
        return dmg;
    }

    let r = '';
    for (const e of names) {
        r += `${e} - ${healthCalc(hpPattern, e)} health, ${totalDmgCalc(delimitersPattern, e, digitsSum(digitsPattern, e)).toFixed(2)} damage\n`;
    }
    return r;
}
console.log(solve('M3ph-0.5s-0.5t0.0**'));