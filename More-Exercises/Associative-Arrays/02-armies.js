function solve(input) {
    let armies = [];

    for (const line of input) {
        if (line.includes('arrives')) {
            let leader = line.split(" ");
            leader.pop();
            leader = leader.join(' ');

            armies.push({ leader, totalCount: 0 });

        } else if (line.includes(': ')) {
            let [name, army] = line.split(': ');
            let [armyName, count] = army.split(', ');

            for (const lead of armies) {
                if (lead['leader'] == name) {
                    lead[armyName] = Number(count);
                    lead.totalCount += Number(count);
                }
            }

        } else if (line.includes(' + ')) {
            let [armyName, count] = line.split(' + ');

            for (const currLeader of armies) {
                if (currLeader.hasOwnProperty(armyName)) {
                    currLeader[armyName] += Number(count);
                    currLeader.totalCount += Number(count);
                }
            }

        } else if (line.includes(' defeated')) {
            let name = line.split(" ");
            name.pop();
            name = name.join(' ');

            for (const leader of armies) {
                if (leader['leader'] == name) {
                    let indexOf = armies.indexOf(leader);
                    armies.splice(indexOf, 1);
                }
            }
        }
    }

    armies
        .sort((a, b) => b.totalCount - a.totalCount)
        .forEach(obj => {
            console.log(`${obj['leader']}: ${obj['totalCount']}`);
            delete obj.leader;
            delete obj.totalCount;
            Object.entries(obj).sort((a, b) => (b[1]) - a[1])
                .forEach(([armyName, count]) => {
                    console.log(`>>> ${armyName} - ${count}`);
                });
        });
}
solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Legion + 400',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);    