function solve(arr) {
    const vowels = { 'a': true, 'e': true, 'o': true, 'u': true, 'i': true, }
    let pass = arr[0] + arr[1];
    let letters = arr[2];
    let i = 0;

    function indexHandler(i, str) {
        if (i + 1 >= str.length) {
            i = 0;
        } else {
            i++;
        }
        return i;
    }
    function outputParse(str) {
        return `Your generated password is ${str.split('')
            .map(e => {
                let curr = letters[i];
                if (vowels[e] == true) {
                    e = curr.toLocaleUpperCase();
                    i = indexHandler(i, letters);
                    return e;
                }
                return e;
            })
            .reverse()
            .join('')}`;
    }
    return outputParse(pass);
}
console.log(solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']));