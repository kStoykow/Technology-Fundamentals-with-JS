function solve(name, area, population, country, postCode) {
    let cityInfo = { name, area, population, country, postCode };
    
    for (const key in cityInfo) {
        console.log(`${key} -> ${cityInfo[key]}`);  
    }
}
solve("Sofia", " 492", "1238438", "Bulgaria", "1000")