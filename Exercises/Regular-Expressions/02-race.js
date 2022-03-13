function solve(data) {
    let obj = data.shift().split(', ').reduce((a, b) => {
        a[b] = 0;
        return a;
    }, {});

    function outputParse(obj) {
        let result = '';

        Object.entries(obj)
            .sort(sortByDistance)
            .slice(0, 3)
            .map(getNames)
            .forEach((e, i) => {
                if (i == 0) {
                    result += `1st place: ${e}\n`;
                } else if (i == 1) {
                    result += `2nd place: ${e}\n`;
                } else {
                    result += `3rd place: ${e}\n`;
                }
            });
        return result;
    }

    for (const e of data) {
        if (e == 'end of race' == true) {
            break;
        }
        let name = e.match(/[A-Za-z]+/g).join('');
        let distance = e.match(/\d/g).map(Number).reduce((a, b) => a + b, 0);
        if (obj.hasOwnProperty(name) == true) {
            obj[name] += distance;
        }
    }
    const sortByDistance = (a, b) => b[1] - a[1];
    const getNames = e => e[0];

    return outputParse(obj);
}
console.log(solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']));