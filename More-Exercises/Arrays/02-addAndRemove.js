function solve(data) {
    let newArray = [];
    const commandMap = {
        add: 'push',
        remove: 'pop'
    }
    for (let i = 0; i < data.length; i++) {
        newArray[commandMap[data[i]]](i + 1);
    }

    if (newArray.length < 1) {
        return 'Empty';
    } else {
        return newArray.join(' ');
    }
}
console.log(solve(['add', 'add', 'remove', 'add', 'add']));