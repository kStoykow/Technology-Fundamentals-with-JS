function solve(name, lastName, hairColor) {
    let person = {name, lastName, hairColor};
    let jsonObj = JSON.stringify(person);
    console.log(jsonObj);
}
solve('Tim', 'jones', 'black')