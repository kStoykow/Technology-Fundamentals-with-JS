function solve(input) {
    let [first, second, swap] = input;
    let concat = first + second;
    let password = '';
    let vowels = { a: 'a', o: 'o', u: 'u', i: 'i', e: 'e', };
    let counter = 0;

    for (let i = 0; i < concat.length; i++) {
        if (vowels.hasOwnProperty(concat[i])) {
            if (swap[counter]) {
                password += swap[counter].toUpperCase();
                counter++;
            } else {
                counter = 0;
                password += swap[counter].toUpperCase();
                counter++;
            }

        } else {
            password += concat[i];
        }
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)