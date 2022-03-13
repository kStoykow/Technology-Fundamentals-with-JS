function solve(str) {
    let arr = str.split('');
    let first = new Array(arr.length / 2);
    let second = new Array(arr.length / 2);
    for (let i = 0; i < arr.length / 2; i++) {
        first[i] = arr[i];
        second[arr.length - 1 - i] = arr[arr.length - 1 - i];
    }
    return [first.reverse().join(''), second.reverse().join('')].join('\n');
}
console.log(solve('tluciffiDsIsihTgnizamAoSsIsihT'));