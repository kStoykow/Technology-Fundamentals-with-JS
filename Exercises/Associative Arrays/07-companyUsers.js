function solve(input) {
    let companies = {};

    for (const line of input) {
        let [company, employee] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }

        if (!companies[company].includes(employee)) {
            companies[company].push(employee);
        }

    }

    Object
        .entries(companies)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([key, value]) => {
            console.log(`${key}\n\-- ${value.join('\n-- ')}`);
        });
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> AA12346',
    'Microsoft -> CC122345',
    'HP -> BB12345'
])