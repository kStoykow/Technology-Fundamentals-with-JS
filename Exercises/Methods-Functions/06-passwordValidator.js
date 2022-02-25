function passwordChecker(pass) {
    let lengthValidator = isLongEnough(pass);
    let symbolsValidator = symbolsCheck(pass);
    let digitsValidator = minimumDigits(pass);
    let result = '';

    if (lengthValidator == true && symbolsValidator == true && digitsValidator == true) {
        result += 'Password is valid\n';
    } else if (lengthValidator == false) {
        result += 'Password must be between 6 and 10 characters\n';
    }
    if (symbolsValidator == false) {
        result += 'Password must consist only of letters and digits\n';
    }
    if (digitsValidator == false) {
        result += 'Password must have at least 2 digits\n';
    }

    function isLongEnough(pass) {
        if (pass.length < 6 || pass.length > 10) {
            return false;
        }
        return true;
    }
    function symbolsCheck(pass) {
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', "J", 'K',
            'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', "U", 'V', "W", 'X', 'Y', 'Z'];

        for (let i = 0; i < pass.length; i++) {
            let currentSymbol = pass[i].toUpperCase();
            let isLetter = false;
            let isDigit = false;

            if (alphabet.includes(currentSymbol)) {
                isLetter = true
            }
            if (!isNaN(Number(currentSymbol))) {
                isDigit = true;
            }

            if (isDigit == false && isLetter == false) {
                return false;
            }
        }
        return true;
    }
    function minimumDigits(pass) {
        if (pass.split('').filter(e => !isNaN(Number(e))).length >= 2) {
            return true;
        }
        return false;
    }
    return result;
}
console.log(passwordChecker('log!3In'));