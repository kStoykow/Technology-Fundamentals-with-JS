function solve(input) {
    input.shift();
    let keyPattern = /[s,t,a,r]/gi;
    let validInputPattern = /@(?<name>[A-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<type>A|D)![^@\-!:>]*->\d+/g;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    function strDecrypt(line) {
        let key = 0;
        let str = line;
        if (line.match(keyPattern)) {
            key = line.match(keyPattern).length;
            str = line.split('').map(e => String.fromCharCode(e.charCodeAt(0) - key)).join('');
        }
        return str;
    }
    function outputParse(arr, arr2) {
        let r = `Attacked planets: ${arr.length}\n`;
        r += arr.map(e => `-> ${e}\n`).join('');
        r += `Destroyed planets: ${arr2.length}\n`;
        r += arr2.map(e => `-> ${e}\n`).join('');
        return r;
    }

    const planetsMap = {
        'A': (arrAtack, arrDest, name) => {
            arrAtack.push(name);
            return [arrAtack, arrDest]

        },
        'D': (arrAtack, arrDest, name) => {
            arrDest.push(name);
            return [arrAtack, arrDest]
        },
    }
    const sortedByName = (a, b) => a.localeCompare(b);

    for (const line of input) {
        let str = strDecrypt(line);

        for (const match of str.matchAll(validInputPattern)) {
            [attackedPlanets, destroyedPlanets] = planetsMap[match.groups.type](attackedPlanets, destroyedPlanets, match.groups.name);
        }
    }

    let sortedA = attackedPlanets.sort(sortedByName);
    let sortedD = destroyedPlanets.sort(sortedByName);

    return outputParse(sortedA, sortedD);
}
console.log(solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'EHfqyqwnhf?8555&I&2C9555SR',
    'EHfsytsnhf?8555&I&2C9555SR']));