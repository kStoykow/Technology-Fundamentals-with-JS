function solve(firstName, lastName, age) {
    let person = { firstName, lastName, age };
    return Object.entries(person).reduce((a, b) => a += `${b[0]}: ${b[1]}\n`, '');
}
console.log(solve('Peter', 'Pan', 20));