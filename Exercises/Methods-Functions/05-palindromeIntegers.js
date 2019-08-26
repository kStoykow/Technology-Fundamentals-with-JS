function isTrue(array) {
    let result = isPalindrome();
    console.log(result); 

    function isPalindrome() {
        let toPrint = '';

        for (let i = 0; i < array.length; i++) {
            let currentElement = array[i].toString();
            let isFalse = false;

            for (let j = 0; j < currentElement.length / 2; j++) {
                if (currentElement[j] !== currentElement[currentElement.length - 1 - j]) {
                    isFalse = true;
                    break;
                }
            }

            if (isFalse) {
                toPrint += 'false \n';
            } else {
                toPrint += 'true \n';
            }
        }

        return toPrint;
    }
}