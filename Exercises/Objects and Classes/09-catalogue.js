function solve(input) {
    let catalogue = {};

    let sorted = input
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(e => e.split(' : '))
        .forEach(line => {
            catalogue[line[0]] = Number(line[1]);
        });

    let category = {}

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        for (const key in catalogue) {
            if (key[0] == String.fromCharCode(i).toUpperCase()) {
                if (category.hasOwnProperty(String.fromCharCode(i).toUpperCase())) {
                    category[String.fromCharCode(i).toUpperCase()].push(`  ${key}: ${catalogue[key]}`);
                } else {
                    category[String.fromCharCode(i).toUpperCase()] = [`  ${key}: ${catalogue[key]}`];
                }
            }
        }
    }

    for (const key in category) {
        console.log(key);
        let sortedProducts = category[key].sort((a, b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            console.log(product);
        }
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]); 