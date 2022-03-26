function solve(arr) {
    let validatePattern = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/g;
    let n = Number(arr.shift());
    let r = '';

    for (let i = 0; i < n; i++) {
        if (arr[i].match(validatePattern)) {

            if (arr[i].match(/\d/g)) {
                r += `Product group: ${arr[i].match(/\d/g).reduce((a, b) => a + b)}\n`;
            }else{
                r+= `Product group: 00\n`;
            }

        } else {
            r += 'Invalid barcode\n';
        }
    }
    return r;
}
console.log(solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]));