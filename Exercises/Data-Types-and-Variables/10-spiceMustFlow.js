function extractSpice(mine) {
    let days = 0;
    let totalMined = 0;

    while (mine >= 100) {
        totalMined += mine;
        days++;

        if (totalMined >= 26) {
            totalMined -= 26;
        }

        mine -= 10;
    }

    if (totalMined >= 26) {
        totalMined -= 26;
    }

    return [days, totalMined].join('\n');
}
console.log(extractSpice(111));