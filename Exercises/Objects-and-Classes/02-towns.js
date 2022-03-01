function solve(data) {
    return data.reduce((a, b) => {
        let [town, latitude, longitude] = b.split(' | ');
        a.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        })
        return a;
    }, []);
}
console.log(solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']));