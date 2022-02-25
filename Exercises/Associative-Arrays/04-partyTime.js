function solve(input) {
    let guestList = { vip: [], regular: [] };
    let currentGuest = input.shift();

    while (currentGuest != 'PARTY') {
        let isString = parseInt(currentGuest[0]);

        if (!isNaN(isString)) {
            guestList['vip'].push(currentGuest);

        } else {
            guestList['regular'].push(currentGuest);
        }

        currentGuest = input.shift();
    }

    for (const guest of input) {
        if (guestList['vip'].includes(guest)) {
            let indexOf = guestList['vip'].indexOf(guest);
            guestList['vip'].splice(indexOf, 1);

        } else {
            let indexOf = guestList['regular'].indexOf(guest);
            guestList['regular'].splice(indexOf, 1);
        }
    }

    let length = guestList['vip'].length + guestList['regular'].length;
    console.log(length);
    for (const key in guestList) {
        console.log(`${guestList[key].join('\n')}`);
    }
}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',

    'Ce8vwPmE',
    'SVQXQCbc'
])