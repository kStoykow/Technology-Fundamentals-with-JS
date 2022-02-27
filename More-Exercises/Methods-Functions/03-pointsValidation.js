function distance(arr) {
    return checkDistance(arr);

    function checkDistance(array) {
        let x1 = array[0];
        let y1 = array[1];
        let x2 = array[2];
        let y2 = array[3];
        let r = '';

        let xPointToZero = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
        let yPointToZero = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));
        let distanceBetweenPoints = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        function isValidPoints(num, x, y) {
            if (Number.isInteger(num)) {
                return r += `{${x}, ${y}} to {0, 0} is valid\n`;
            } else {
                return r += `{${x}, ${y}} to {0, 0} is invalid\n`;
            }
        }
        function isValidDistance(num, x, y, x2, y2) {
            if (Number.isInteger(num)) {
                r += `{${x}, ${y}} to {${x2}, ${y2}} is valid`;
            } else {
                r += `{${x}, ${y}} to {${x2}, ${y2}} is invalid`;
            }
        }
        isValidPoints(xPointToZero, x1, y1);
        isValidPoints(yPointToZero, x2, y2);
        isValidDistance(distanceBetweenPoints, x1, y1, x2, y2);
        return r;
    }
}
console.log(distance([3, 0, 0, 4]));