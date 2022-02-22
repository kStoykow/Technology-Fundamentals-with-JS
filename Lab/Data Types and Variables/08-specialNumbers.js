function isSpecial(num) {
    let res = '';
    for (let i = 1; i <= num; i++) {
        let n = i.toString();
        let digits = 0;

        for (let j = 0; j < n.length; j++) {
            digits += Number(n[j]);
        }

        if (digits === 5 || digits === 7 || digits === 11) {
            res += `${i} -> True\n`;
        } else {
            res += `${i} -> False\n`;
        }
    }
    return res;
}
console.log(isSpecial(10));