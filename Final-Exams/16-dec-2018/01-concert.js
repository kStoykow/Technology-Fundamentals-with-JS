function solve(input) {
    let bands = {}
    let bandToPrint = input.pop();
    input.pop();

    for (const line of input) {
        let currCommand = line.split('; ');

        if (currCommand[0] == 'Add') {
            let [, bandName, membersStr] = currCommand;
            let members = membersStr.split(', ');

            if (!bands.hasOwnProperty(bandName)) {
                bands[bandName] = {};
                bands[bandName]['members'] = members;
                bands[bandName]['time'] = 0;

            } else {
                for (const currMember of members) {
                    if (!bands[bandName]['members'].includes(currMember)) {
                        bands[bandName]['members'].push(currMember);
                    }
                }
            }

        } else {
            let [, bandName, time] = currCommand;
            if (!bands.hasOwnProperty(bandName)) {
                bands[bandName] = {};
                bands[bandName]['members'] = [];
                bands[bandName]['time'] = Number(time);
            } else {
                bands[bandName]['time'] += Number(time);
            }
        }
    }

    let totalTime = Object.values(bands).reduce((acc, e) => acc + Number(e.time), 0);

    console.log(`Total time: ${totalTime}`);

    Object.entries(bands)
        .sort((a, b) => Object.values(b[1])[1] - Object.values(a[1])[1] || a[0].localeCompare(b[0]))
        .forEach(([bandName, objValues]) => {
            console.log(`${bandName} -> ${objValues['time']}`);
        });

    console.log(bandToPrint);

    for (const member of bands[bandToPrint]['members']) {
        console.log(`=> ${member}`);
    }
}
solve(['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'])