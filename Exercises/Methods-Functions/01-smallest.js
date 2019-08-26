function printSmallest(numOne, numTwo, numThree) {
    let result = smallestNum()
    console.log(result);

    function smallestNum() {
        if (numOne <= numTwo && numOne <= numThree) {
            return numOne;
        }

        if (numTwo <= numOne && numTwo <= numThree) {
            return numTwo;
        }

        if (numThree <= numOne && numThree <= numTwo) {
            return numThree;
        }
    }

}