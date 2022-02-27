function solve(input) {
    let data = input.shift().split(', ');
    let nbh = new Map();
    for (const street of data) {
        nbh.set(street, []);
    }

    for (const ppl of input) {
        let [where, who] = ppl.split(' - ');

        if (nbh.has(where)) {
            let currWho = nbh.get(where);
            nbh.set(where, currWho.concat(who));
        }
    }

    let sorted = [...nbh].sort((a, b) => b[1].length - a[1].length);

    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (const ppl of kvp[1]) {
            console.log(`--${ppl}`);  
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);