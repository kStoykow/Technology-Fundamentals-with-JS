function printCharSequence(firstChar, lastChar) {
    let charSequence = getSequenceOfChars();
    console.log(charSequence);

    function getSequenceOfChars() {
        let toPrint = '';

        if (firstChar.charCodeAt(0) < lastChar.charCodeAt(0)) {
            for (let i = firstChar.charCodeAt(0) + 1; i < lastChar.charCodeAt(0); i++) {
                toPrint += String.fromCharCode(i) + ' ';
            }

            return toPrint;

        } else {
            for (let i = lastChar.charCodeAt(0) + 1; i < firstChar.charCodeAt(0); i++) {
                toPrint += String.fromCharCode(i) + ' ';
            }

            return toPrint;
        }
    }

}