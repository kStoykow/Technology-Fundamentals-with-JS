function printGrade(grade) {
    let result = whatGrade();
    console.log(result);

    function whatGrade() {
        if (grade >= 2 && grade < 3) {
            return 'Fail';

        } if (grade >= 3 && grade < 3.5) {
            return 'Poor';

        } if (grade >= 3.5 && grade < 4.5) {
            return 'Good';

        } if (grade >= 4.5 && grade < 5.5) {
            return 'Very good';
        }

        return 'Excellent';
    }
}