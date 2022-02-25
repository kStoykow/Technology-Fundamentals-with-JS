function buildingWall(groups) {
    groups = groups.map(Number);
    let result = [];

    while (groups.some(e => e < 30)) {
        result.push(groups.filter(e => e < 30).length * 195)
        groups = groups.map(e => {
            if (e != 30) {
                return Number(e) + 1;
            } else {
                return Number(e);
            }
        });
    }
    return [result.join(', '), `${result.reduce((a, b) => a + b) * 1900} pesos`].join('\n');
}
console.log(buildingWall(['21', '25', '28']));