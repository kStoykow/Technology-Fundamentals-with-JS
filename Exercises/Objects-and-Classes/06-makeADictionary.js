function solve(data) {
    data.reduce((a, b) => {
        let [k, v] = Object.entries(JSON.parse(b))[0];
        a[k] = v;
        return a;
    }, {});

    let r = '';
    for (const k of Object.keys(dict).sort((a, b) => a.localeCompare(b))) {
        r += `Term: ${k} => Definition: ${dict[k]}\n`;
    }
    return r;
}
console.log(solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of\ material, typically used to hold or\ fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])
);