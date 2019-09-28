function solve(input) {
    let dictionary = {};

    input.forEach(line => {
        let [key, value] = Object.entries(JSON.parse(line))[0];
        dictionary[key] = value;
    });

    Object
        .entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(kvp => {
            console.log(`Term: ${kvp[0]} => Definition: ${kvp[1]}`);
        });
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of\ material, typically used to hold or\ fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])