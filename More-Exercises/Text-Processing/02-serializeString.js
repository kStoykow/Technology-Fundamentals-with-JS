function solve(input) {
    input = input[0];
    let obj = {};

    function outputParse(obj) {
        let r = '';
        for (const key in obj) {
            r += `${key}:${obj[key].join('/')}\n`;
        }
        return r;
    }
    
    for (let i = 0; i < input.length; i++) {
        let charIndex = input.indexOf(input[i], i);
        if (obj.hasOwnProperty(input[i]) == false) {
            obj[input[i]] = [];
        }
        obj[input[i]].push(charIndex);
    }

    return outputParse(obj);
}
console.log(solve(['abbababa']));