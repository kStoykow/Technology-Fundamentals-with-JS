function cardsPowerCalc(data) {
    const powerMap = {
        1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    const typeMap = {
        S: 4, H: 3, D: 2, C: 1
    }
    let cardPowerConverter = e => {
        let splitted = e.split('');
        let p = splitted.slice(0, splitted.length - 1).join('');
        let t = splitted.slice(-1).join('');
        return e = powerMap[p] * typeMap[t];
    }
    let pointsCalc = e => {
        e[1] = [...e[1]]
            .map(cardPowerConverter)
            .reduce((a, b) => a + b);
        return e;
    }
    function objGenerator(a, b) {
        let [name, cards] = b.split(': ');
        cards = cards.split(', ');
        if (!a.hasOwnProperty(name)) {
            a[name] = new Set();
        }
        cards.forEach(card => a[name].add(card));
        return a;
    }

    return Object.entries(data.reduce((a, b) => {
        return objGenerator(a, b);
    }, {}))
        .map(pointsCalc)
        .map(e => e.join(': '))
        .join('\n');
}
console.log(cardsPowerCalc([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']));