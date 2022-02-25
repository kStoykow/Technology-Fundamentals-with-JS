function partyTracker(data) {
    let r = '';
    const isGoingMap = {
        true: (arr, name) => {
            if (arr.includes(name)) {
                arr.splice(arr.indexOf(name), 1);
            } else {
                r += `${name} is not in the list!\n`;
            }
        },
        false: (arr, name) => {
            if (arr.includes(name)) {
                r += `${name} is already in the list!\n`;
            } else {
                arr.push(name);
            }
        }
    }
    let guestList = data.reduce((a, e) => {
        let name = e.split(' ')[0];
        isGoingMap[e.includes('not')](a, name);

        return a;
    }, []);

    r += `${guestList.join('\n')}`;
    return r;
}
console.log(partyTracker(['Allie is going!',
    'George is going!',
    'John is going!',
    'John is going!',
]));