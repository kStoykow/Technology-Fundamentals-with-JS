function reverse(string) {
    let reversedString = '';

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[string.length - i - 1]
        reversedString += currentChar
    }
    console.log(reversedString);

}
reverse('olleH')