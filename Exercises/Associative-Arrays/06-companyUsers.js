function companyTracker(data) {
    let obj = data.reduce((a, b) => {
        let [company, id] = b.split(' -> ');
        if (!a.hasOwnProperty(company)) {
            a[company] = [];
        }
        if (!a[company].includes(id)) {
            a[company].push(id);
        }
        return a;
    }, {});

    const sortByCompanyName = (a, b) => a[0].localeCompare(b[0]);
    const idParse = e => `-- ${e}`;
    const outputParse = ([company, id] = e) => r += `${company}\n${id.map(idParse).join('\n')}\n`;
    let r = '';
    
    Object.entries(obj)
        .sort(sortByCompanyName)
        .map(outputParse)

    return r;
}
console.log(companyTracker([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]));