function solve(arr) {
    let pattern = /(@|#)[A-z]{3,}\1\1[A-z]{3,}\1/g;
    let mirrors = arr[0].match(pattern);
    let r = '';
    let words = [];

    if (mirrors == null) {
        r += 'No word pairs found!\n';
    } else {
        r += `${mirrors.length} word pairs found!\n`;
        for (const e of mirrors) {
            let [first, second] = e.split(/[#@]+/).filter(e => e != '');
            if (first == second.split('').reverse().join('')) {
                words.push(`${first} <=> ${second}`);
            }
        }
    }

    if (words.length > 0) {
        r += `The mirror words are:\n${words.join(', ')}\n`;
    } else {
        r += 'No mirror words!\n';
    }
    return r;
}
console.log(solve(
    ['@mix#tix3dj#pol##loOpwl@@bong&song%4very$long@thong##car#ac#tu@pck@p@#rrAs#r#@w1r']
));