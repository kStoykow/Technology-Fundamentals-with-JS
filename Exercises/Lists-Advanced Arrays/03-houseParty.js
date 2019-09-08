function partyTracker(commands) {
    let guestList = [];

    for (let i = 0; i < commands.length; i++) {
        let currentComand = commands[i].split(' ');
        let name = currentComand[0];

        if (currentComand.includes('not')) {

            if (guestList.includes(name)) {
                for (let j = 0; j < guestList.length; j++) {
                    if (guestList[j] === name) {
                        guestList.splice(j, 1);
                    }
                }
            } else {
                console.log(`${name} is not in the list!`);
            }

        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    }

    for (const element of guestList) {
        console.log(element);
    }
}