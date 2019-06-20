function login(input) {
    let userName = input.shift();
    let command = input.shift();
    let counter = 0;
    let password = '';

    for (let i = 0; i < userName.length; i++) {
        let digit = userName[userName.length - 1 - i];
        password += digit;
    }

    while (command !== password) {
        counter++;

        if (counter === 4) {
            console.log(`User ${userName} blocked!`);
            break;

        } else {
            console.log('Incorrect password. Try again.');
        }
        command = input.shift();
    }

    if (command === password) {
        console.log(`User ${userName} logged in.`);
    }
}