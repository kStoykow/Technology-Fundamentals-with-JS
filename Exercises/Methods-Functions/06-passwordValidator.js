function passwordChecker(password) {
    let passwordLength = isLongEnough();
    let passwordSymbols = symbolsCheck();
    let passwordDigits = minimumDigits();

    if (passwordLength && passwordSymbols && passwordDigits) {
        console.log('Password is valid');
    } else if (!passwordLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!passwordSymbols) {
        console.log('Password must consist only of letters and digits');
    }

    if (!passwordDigits) {
        console.log('Password must have at least 2 digits');
    }

    function isLongEnough() {
        if (password.length < 6 || password.length > 10) {
            return false;
        }
        return true;
    }
    function symbolsCheck() {
        let toCheck = password.split('');

        for (let i = 0; i < password.length; i++) {
            let currentSymbol = password[i].toUpperCase();
            let isLetter = false;
            let isDigit = false;

            for (let upperCase = 65; upperCase < 91; upperCase++) {
                if (currentSymbol.charCodeAt(0) === upperCase) {
                    isLetter = true;
                }
            }

            for (let digit = 48; digit < 58; digit++) {
                if (currentSymbol.charCodeAt(0) === digit) {
                    isDigit = true;
                }
            }

            if (!isDigit && !isLetter) {
                return false;
            }
        }

        return true;
    }
    function minimumDigits() {
        let digitsCheck = password.split('');
        let digitsCounter = 0;
        for (let i = 0; i < digitsCheck.length; i++) {
            let currentSymbol = digitsCheck[i];

            for (let digit = 48; digit < 58; digit++) {
                if (currentSymbol.charCodeAt(0) === digit) {
                    digitsCounter++;
                }
            }
        }

        if (digitsCounter >= 2) {
            return true;
        }
        return false;
    }
}