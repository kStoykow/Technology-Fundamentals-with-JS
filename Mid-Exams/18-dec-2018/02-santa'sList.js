function solve(input) {
    let badBoys = input.shift().split('&');
    let command = input.shift();

    while (command != "Finished!") {
        let [toDo, name, newName] = command.split(' ');

        if (toDo == "Bad") {
            if (!badBoys.includes(name)) {
                badBoys.unshift(name);
            }

        } else if (toDo == 'Good') {
            if (badBoys.includes(name)) {
                let indexOf = badBoys.indexOf(name);
                badBoys.splice(indexOf, 1);
            }

        } else if (toDo == 'Rename') {
            if (badBoys.includes(name)) {
                let indexOf = badBoys.indexOf(name);
                badBoys[indexOf] = newName;
            }

        } else {
            if (badBoys.includes(name)) {
                let indexOf = badBoys.indexOf(name);
                let rearanged = badBoys.splice(indexOf, 1);
                badBoys.push(rearanged);
            }
        }

        command = input.shift();
    }

    console.log(badBoys.join(', '));
}
solve(['Peter&George&Mike',
    'Bad Joshua',
    'Good Peter',
    'Rename Mike Jhon',
    'Finished!'])