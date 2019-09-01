function manipulate(input) {
    let array = input.shift().split(' ');
    for (let i = 0; i < input.length; i++) {
        let toDo = input[i].split(' ');
        let command = toDo[0];
        let value = toDo[1];

        if (command === 'Add') {
            array.push(value);
        } else if (command === 'Remove') {
            array = array.filter(e => e != value);
        } else if (command === 'RemoveAt') {
            array.splice(value, 1);
        } else if (command === 'Insert') {
            let atIndex = toDo[2];
            array.splice(atIndex, 0, value);
        }
    }

    console.log(array.join(' '));
}