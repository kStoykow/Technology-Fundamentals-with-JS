function solve(input) {
    let players = input.shift().split(', ');
    let line = input.shift();
    let namePattern = /(?<name>[A-Za-z]+)/g;
    let scorePattern = /(?<digit>\d)/g;
    let classation = {};

    while (line != 'end of race') {
        let currName = '';
        let currScore = 0;
        while ((currChar = namePattern.exec(line)) != null) {
            currName += currChar.groups.name;
        }

        while ((currDigit = scorePattern.exec(line)) != null) {
            currScore += Number(currDigit.groups.digit);
        }

        if (players.includes(currName)) {
            if (!classation.hasOwnProperty(currName)) {
                classation[currName] = currScore;
            } else {
                classation[currName] += currScore;
            }
        }

        line = input.shift();
    }

    let winners = Object.entries(classation).sort((a, b) => b[1] - a[1]);

    for (let currPlace = 0; currPlace < 3; currPlace++) {
        if (currPlace == 0) {
            console.log(`${currPlace + 1}st place: ${winners[currPlace][0]}`);
        } else if (currPlace == 1) {
            console.log(`${currPlace + 1}nd place: ${winners[currPlace][0]}`);
        } else {
            console.log(`${currPlace + 1}rd place: ${winners[currPlace][0]}`);
        }
    }
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])