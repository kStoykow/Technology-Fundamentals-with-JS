function solve(input) {
    let quests = input.shift().split(', ');
    let commands = input.shift().split(' - ');

    while (commands[0] != 'Retire!') {
        if (commands[0] == 'Start') {
            if (!quests.includes(commands[1])) {
                quests.push(commands[1]);
            }

        } else if (commands[0] == 'Complete') {
            if (quests.includes(commands[1])) {
                let indexOf = quests.indexOf(commands[1]);
                quests.splice(indexOf, 1);
            }

        } else if (commands[0] == 'Side Quest') {
            let [quest, side] = commands[1].split(':');
            if (quests.includes(quest)) {
                let indexOf = quests.indexOf(quest);
                if (!quests.includes(side)) {
                    quests.splice(indexOf + 1, 0, side);
                }
            }

        } else {
            if (quests.includes(commands[1])) {
                let indexOf = quests.indexOf(commands[1]);
                let renewed = quests[indexOf];
                quests.splice(indexOf, 1);
                quests.push(renewed);
            }
        }

        commands = input.shift().split(' - ');
    }

    if (commands == 'Retire!') {
        console.log(quests.join(', '));
    }
}
solve(['Hello World, If else',
    'Complete - Homework',
    'Side Quest - If else:Switch',
    'Renew - Hello World',
    'Retire!'])