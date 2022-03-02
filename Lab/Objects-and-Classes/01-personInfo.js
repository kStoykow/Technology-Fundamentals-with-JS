function solve(firstName, lastName, age) {
    return Object.entries({ firstName, lastName, age }).reduce((a, b) => a += `${b[0]}: ${b[1]}\n`, '');
}
console.log(solve('Peter', 'Pan', 20));