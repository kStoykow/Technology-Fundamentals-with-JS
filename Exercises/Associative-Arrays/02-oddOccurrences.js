function outputParse(map) {
    let r = '';
    for (const kvp of map) {
        if (kvp[1] % 2 != 0) {
            r += `${kvp[0]} `;
        }
    }
    return r;
}

function parkingTracker(data, output) {
    let arr = data.split(' ').map(x => x.toLowerCase());
    let map = arr.reduce((a, b) => {
        if (!a.has(b)) {
            a.set(b, 0);
        }
        a.set(b, a.get(b) + 1)
        return a;
    }, new Map());

    return output(map);
}
console.log(parkingTracker(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
    , outputParse));
