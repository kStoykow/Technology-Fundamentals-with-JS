function destinatonPicker(data) {
    const sortByCountry = (a, b) => a[0].localeCompare(b[0]);
    const sortByPrice = (a, b) => a[1] - b[1];
    const cityParse = e => e.join(' -> ');
    const outputParse = country => `${country[0]} -> ${Object.entries(obj[country[0]]).sort(sortByPrice).map(cityParse).join(' ')}`;

    let obj = data.reduce((a, b) => {
        let [country, city, v] = b.split(' > ');
        if (!a.hasOwnProperty(country)) {
            a[country] = {};
            a[country][city] = Number(v);
        } else {
            if (!a[country].hasOwnProperty(city)) {
                a[country][city] = Number(v);
            } else {
                if (a[country][city] > Number(v)) {
                    a[country][city] = Number(v);
                }
            }
        }
        return a;
    }, {});

    return Object.entries(obj)
        .sort(sortByCountry)
        .map(outputParse)
        .join('\n');
}
console.log(
    destinatonPicker([
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 80",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200",
    ]));