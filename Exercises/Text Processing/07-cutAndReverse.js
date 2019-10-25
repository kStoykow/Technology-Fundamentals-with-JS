function solve(input) {
    let indexOf = input.length / 2;
    let one = input.substr(0, indexOf);
    let two = input.substr(indexOf);
    let first = one.split('').reverse();
    let second = two.split('').reverse();
    console.log(first.join(''));
    console.log(second.join(''));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')