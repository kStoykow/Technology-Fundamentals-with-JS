function dna(repeats) {
    const drawMap = {
        0: (e, e2, result) => result += `**${e}${e2}**\n`,
        1: (e, e2, result) => result += `*${e}--${e2}*\n`,
        2: (e, e2, result) => result += `${e}----${e2}\n`,
        3: (e, e2, result) => result += `*${e}--${e2}*\n`
    }
    return visualizeDna(repeats, drawMap);
    function visualizeDna(n, map) {
        let sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
        let result = '';


        for (let i = 0; i < n; i++) {
            let el = sequence.shift();
            let nextEl = sequence.shift();
            sequence.push(el, nextEl);

            result = map[i % 4](el, nextEl, result);
        }
        return result;
    }
}
console.log(dna(4));