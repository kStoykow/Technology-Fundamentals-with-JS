function repeatString(string, repeats) {
    let result = concatenate();
    console.log(result);

    function concatenate() {
        let newString = '';

        for (let i = 0; i < repeats; i++) {
            newString += string;
        }

        return newString;
    }
}