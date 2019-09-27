function solve(input) {
    let obj = JSON.parse(input);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')