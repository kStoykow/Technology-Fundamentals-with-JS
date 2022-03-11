function solve(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result = result + str[i];
        }
    }
    return result;
}
function solve2(str) {
    return str.split('').filter((e, i) => e != str[i + 1]).join('');
}
console.log(solve('aaaaabbbbbcdddeeeedssaa'));
console.log(solve2('aaaaabbbbbcdddeeeedssaa'));