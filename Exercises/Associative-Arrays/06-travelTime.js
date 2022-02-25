function solve(input) {
    let travel = {};

    for (const destination of input) {
        let [country, city, price] = destination.split(' > ');
        if (!travel.hasOwnProperty(country)) {
            travel[country] = {};
        }

        if (travel[country].hasOwnProperty(city)) {
            if (travel[country][city] > price) {
                travel[country][city] = price;
            }

        } else {
            travel[country][city] = price;

        }
    }

    Object.entries(travel)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([country, city]) => {
            let sortedCity = Object.entries(city).sort((a, b) => a[1] - b[1]);
            console.log(`${country} -> ${sortedCity.join(' ').split(',').join(' -> ')}`);
        });
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 80",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
])