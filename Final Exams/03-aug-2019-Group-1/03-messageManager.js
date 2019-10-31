function solve(input) {
    let capacity = Number(input.shift());
    let command = input.shift();
    let messenger = {};
    let add = (obj, name, sent, recieved) => {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
            obj[name]['sent'] = Number(sent);
            obj[name]['recieved'] = Number(recieved);
        }
        return;
    };
    let message = (obj, sender, reciever) => {
        if (obj.hasOwnProperty(sender) && obj.hasOwnProperty(reciever)) {
            obj[sender]['sent'] += 1;
            obj[reciever]['recieved'] += 1;

            if ((obj[sender]['sent'] + obj[sender]['recieved']) == capacity) {
                console.log(`${sender} reached the capacity!`);
                delete obj[sender];
            }

            if ((obj[reciever]['recieved'] + obj[reciever]['sent']) == capacity) {
                console.log(`${reciever} reached the capacity!`);
                delete obj[reciever];
            }
        }
        return;
    };
    let empty = (obj, name) => {
        if (name == 'All') {
            for (const key in obj) {
                delete obj[key];
            }
        } else {
            if (obj.hasOwnProperty(name)) {
                delete obj[name];
            }
        }

        return;
    };

    while (command != 'Statistics') {
        if (command.includes('Add')) {
            let [, name, sent, recieved] = command.split('=');
            add(messenger, name, sent, recieved);

        } else if (command.includes('Message')) {
            let [, sender, reciever] = command.split('=');
            message(messenger, sender, reciever);

        } else {
            let [, name] = command.split('=');
            empty(messenger, name);
        }

        command = input.shift();
    }

    console.log(`Users count: ${Object.keys(messenger).length}`);
    Object.entries(messenger)
        .sort((a, b) => b[1]['recieved'] - a[1]['recieved'] || a[0].localeCompare(b[0]))
        .forEach(([name, objValues]) => {
            let totalMessages = Object.values(objValues).reduce((acc, e) => acc + e);
            console.log(`${name} - ${totalMessages}`);
        });
}
solve([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics',
])