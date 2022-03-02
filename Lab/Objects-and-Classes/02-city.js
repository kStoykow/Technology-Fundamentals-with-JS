function solve(name, area, population, country, postCode) {
    return Object.entries({ name, area, population, country, postCode }).reduce((a, b) => a += `${b[0]} -> ${b[1]}\n`, '');
}
console.log(solve("Sofia", " 492", "1238438", "Bulgaria", "1000"));