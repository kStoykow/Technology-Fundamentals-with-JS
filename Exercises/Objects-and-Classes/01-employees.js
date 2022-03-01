function solve(data) {
    return data.reduce((a, b) => {
        a.push({
            'Name': b,
            'Personal Number': b.length
        })
        return a;
    }, [])
        .map(obj => `${Object.entries(obj)[0].join(': ')} -- ${Object.entries(obj)[1].join(': ')}`)
        .join('\n');
}
console.log(solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]));