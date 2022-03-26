function solve(arr) {
    let pass = arr.shift();
    let r = ''
    for (const e of arr) {
        if (e == 'Done' == true) {
            r += `Your password is: ${pass}`;
            break
        }

        let [command, ...rest] = e.split(' ');

        if (command == 'TakeOdd') {
            pass = pass.split('').filter((e, i) => i % 2 != 0).join('');
            r += `${pass}\n`

        } if (command == 'Cut') {
            let [i, length] = rest.map(Number);
            let cut = pass.substring(i, length + i);
            pass = pass.substring(0, pass.indexOf(cut)) + pass.substring(pass.indexOf(cut) + cut.length);
            r += `${pass}\n`;

        } if (command == 'Substitute') {
            let [old, newStr] = rest;
            if (pass.includes(old) == true) {
                let pattern = new RegExp(`${old}`, 'g');
                pass = pass.replace(pattern, newStr);
                r += `${pass}\n`;
            } else {
                r += 'Nothing to replace!\n';
            }
        }
    }
    return r;
}
console.log(solve(
    [
        "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
        "TakeOdd",
        "Cut 15 3",
        "Substitute :: -",
        "Substitute | ^",
        "Done"]
));