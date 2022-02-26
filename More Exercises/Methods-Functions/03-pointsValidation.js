function distance(arr) {
    return checkDistance(arr);

    function checkDistance(array) {
        let x1 = array.shift();
        let y1 = array.shift();
        let x2 = array.shift();
        let y2 = array.shift();
        let toPrint = '';

        let xPointToZero = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
        let yPointToZero = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));
        let distanceBetweenPoints = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        if (Number.isInteger(xPointToZero)) {
            toPrint += `{${x1}, ${y1}} to {0, 0} is valid\n`;
        } else {
            toPrint += `{${x1}, ${y1}} to {0, 0} is invalid\n`;
        }

        if (Number.isInteger(yPointToZero)) {
            toPrint += `{${x2}, ${y2}} to {0, 0} is valid\n`;
        } else {
            toPrint += `{${x2}, ${y2}} to {0, 0} is invalid\n`;
        }

        if (Number.isInteger(distanceBetweenPoints)) {
            toPrint += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            toPrint += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }

        return toPrint;
    }
}
console.log(distance([2, 1, 1, 1]));