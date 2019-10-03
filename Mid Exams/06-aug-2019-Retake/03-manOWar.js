function solve(input) {
    let myShip = input.shift().split('>').map(Number);
    let enemy = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    input.pop();

    for (let c of input) {
        c = c.split(' ');

        if (c.includes('Fire')) {
            let [toDo, i, dmg] = c;
            if (enemy[i]) {
                enemy[i] -= dmg;
            }

            if (enemy[i] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return;
            }

        } else if (c.includes('Defend')) {
            let [toDo, startIndex, endIndex, dmg] = c;
            if (myShip[startIndex] && myShip[endIndex]) {
                for (let i = startIndex; i <= endIndex; i++) {
                    myShip[i] -= dmg;
                    if (myShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }

        } else if (c.includes('Repair')) {
            let [toDo, i, hp] = c;
            if (myShip[i]) {
                myShip[i] += Number(hp);
                if (myShip[i] > maxHp) {
                    myShip[i] = maxHp;
                }
            }

        } else if (c.includes('Status')) {
            let count = 0;
            for (let i = 0; i < myShip.length; i++) {
                let percentage = (myShip[i] / maxHp) * 100;
                if (percentage < 20) {
                    count++;
                }
            }
            
            console.log(`${count} sections need repair.`);
        }
    }

    let myStatus = myShip.reduce((acc, e) => acc + e);
    let enemyStatus = enemy.reduce((acc, e) => acc + e);
    console.log(`Pirate ship status: ${myStatus}`);
    console.log(`Warship status: ${enemyStatus}`);   
}
solve(['12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'])