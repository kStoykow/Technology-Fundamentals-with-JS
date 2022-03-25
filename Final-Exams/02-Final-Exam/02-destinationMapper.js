function solve(str) {
    let pattern = /(\=|\/)[A-Z][A-z]{2,}\1/g;
    let matches = str.match(pattern);
    let r = [];
    if (matches != null) {
        r = matches.map(e => e.substring(1, e.length - 1))
    }
    return `Destinations: ${r.join(', ')}\nTravel Points: ${r.reduce((a, b) => a + b.length, 0)}`;
}
console.log(solve("=HawaiCyprus/=Invalid/invalid==i5valid=/I5valid/=i="));