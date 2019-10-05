function solve(input) {
    let contacts = input.shift().split(' ');

    for (let command of input) {
        command = command.split(' ');

        if (command.includes('Add')) {
            let [toDo, name, i] = command;
            if (!contacts.includes(name)) {
                contacts.push(name);
            } else {
                if (i >= 0 && i < contacts.length) {
                    contacts.splice(i, 0, name);
                }
            }

        } else if (command.includes("Remove")) {
            let [toDo, i] = command;
            if (i >= 0 && i < contacts.length) {
                contacts.splice(i, 1);
            }

        } else if (command.includes('Export')) {
            let [toDo, i, count] = command;
            i = Number(i);
            count = Number(count);
            if (i >= 0 && i < contacts.length) {
                let toExport = contacts.slice(i, i + count);
                console.log(toExport.join(' '));
            }

        } else if (command.includes('Print')) {
            let [toDo, isNormal] = command;

            if (isNormal == 'Normal') {
                console.log(`Contacts: ${contacts.join(' ')}`);
                break;
            } else {
                console.log(`Contacts: ${contacts.reverse().join(' ')}`);
                break;
            }
        }
    }
}
solve(['Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 5',
    'Add Zayn 4',
    'Export 6 3',
    'Export 3 8',
    'Print Reversed',
])