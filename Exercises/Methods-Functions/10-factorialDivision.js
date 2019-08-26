function factoralDivision(firstNum, secondNum) {
    let result = factorialNumbersDivision();
    console.log(result);

    function factorialNumbersDivision() {
        let firstResult = firstNum;
        let secondResult = secondNum;

        for (let i = 1; i < firstNum; i++) {
            firstResult *= (firstNum - i);
        }

        for (let j = 1; j < secondNum; j++) {
            secondResult *= (secondNum - j);
        }

        return (firstResult / secondResult).toFixed(2);
    }
}
factoralDivision(5, 2)