function solve(map, commands) {
    for (let i = 0; i < map.length; i++) {
        map[i] = map[i].split(' ').map(Number);
    }

    for (let i = 0; i < commands.length; i++) {
        let currenCommand = commands[i].split(' ');
        let toDo = currenCommand[0];
        let value = Number(currenCommand[1]);

        if (toDo == 'breeze') {
            for (let rowToBreeze = 0; rowToBreeze < map.length; rowToBreeze++) {
                map[value][rowToBreeze] -= 15;
                if (map[value][rowToBreeze] < 0) {
                    map[value][rowToBreeze] = 0;
                }
            }

        } else if (toDo == 'gale') {
            for (let colToGale = 0; colToGale < map.length; colToGale++) {
                map[colToGale][value] -= 20;
                if (map[colToGale][value] < 0) {
                    map[colToGale][value] = 0;
                }
            }

        } else if (toDo == 'smog') {
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[i].length; j++) {
                    map[i][j] += value;
                }
            }
        }
    }
    
    let toPrint = [];

    for (let currentRow = 0; currentRow < map.length; currentRow++) {
        for (let currentCol = 0; currentCol < map[currentRow].length; currentCol++) {
            if (map[currentRow][currentCol] >= 50) {
                toPrint.push(` [${currentRow}-${currentCol}]`);
            }
        }
    }

    if (toPrint.length == 0) {
        console.log('No polluted areas');
    } else {
        toPrint.join(',');
        console.log(`Polluted areas:` + toPrint);
    }
}