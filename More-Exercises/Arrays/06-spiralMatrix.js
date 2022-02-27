function spiral(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
        matrix.push([]);
        for (let j = 0; j < y; j++) {
            matrix[i].push(0);
        }
    }
    let element = 0;
    let col = -1;
    let row = 1;

    while (element < x * y) {
        row--;
        col++;
        while (col < y && matrix[row][col] == 0) { // хоризонтално напред
            element++;
            matrix[row][col] = element;
            col++;
        }
        col--;
        row--;
        while (row >= 0 && matrix[row][col] == 0) {
            element++;
            matrix[row][col] = element;
            row--;
        }
        row++;
        col--;
        while (col >= 0 && matrix[row][col] == 0) {
            element++;
            matrix[row][col] = element;
            col--;
        }
        row++;
        col++;
        while (row < x && matrix[row][col] == 0) {//
            element++;
            matrix[row][col] = element;
            row++;
        }
    }
    return matrix.map(row => row.join(' ')).join('\n');
}
console.log(spiral(3, 3));