function isSpecial(num) {
    function specialOrNot(digits, i) {
        if (digits === 5 || digits === 7 || digits === 11) {
            return res += `${i} -> True\n`;
        }
        return res += `${i} -> False\n`;
    }

    let res = '';

    for (let i = 1; i <= num; i++) {
        let n = i.toString();
        let digits = 0;

        for (let j = 0; j < n.length; j++) {
            digits += Number(n[j]);
        }

        specialOrNot(digits, i);
    }
    return res;
}
console.log(isSpecial(10));