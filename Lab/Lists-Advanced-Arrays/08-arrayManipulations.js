function manipulate(input) {
    let arr = input.shift().split(' ');

    const commandsMap = {
        'Add': (arr, v) => arr.push(v),
        'Remove': (arr, v) => arr.splice(arr.indexOf(v), 1),
        'RemoveAt': (arr, i) => arr.splice(i, 1),
        'Insert': (arr, v, i) => arr.splice(i, 0, v)
    }

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let [_, val, index] = tokens;
        let c = tokens[0];
        commandsMap[c](arr, val, index);
    }
    return arr.join(' ');
}
console.log(manipulate([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]));