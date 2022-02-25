function login(arr) {
    let userName = arr.shift();
    let password = userName.split('').reverse().join('');
    let r = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === password) {
            r += `User ${userName} logged in.\n`;
            return r;
        }
        if (i === 3) {
            r += `User ${userName} blocked!\n`;
            return r;
        } else {
            r += 'Incorrect password. Try again.\n';
        }
    }

    return r;
}
console.log(login(['Acer', 'login', 'go', 'let me in', 'recA']));