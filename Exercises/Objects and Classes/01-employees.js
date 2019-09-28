function solve(input) {
    let result = {};

    input.forEach(name => result[name] = name.length);
 
    for (const key in result) {
        console.log(`Name: ${key} -- Personal Number: ${result[key]}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);