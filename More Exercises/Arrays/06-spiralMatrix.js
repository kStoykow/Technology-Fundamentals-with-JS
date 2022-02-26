function spiral(maxRows, maxColumns) {
    let matrix = [];
    for (let i = 0; i < maxRows; i++) {
        matrix.push([]);
        for (let j = 0; j < maxColumns; j++) {
            matrix[i].push(0);
        }
    }
    let element = 0;
    let col = -1;
    let row = 1;

    while (element < maxRows * maxColumns) {
        row--;
        col++;
        while (col < maxColumns && matrix[row][col] == 0) { // хоризонтално напред
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
        while (row < maxRows && matrix[row][col] == 0) {//
            element++;
            matrix[row][col] = element;
            row++;
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
//spiral(3, 3)

function solve(n, n2) {
    let init = new Array(n).fill(new Array(n).fill(0, 0,3));
    console.log(init);
    let r = 1;
    for (let i = 0; i < init.length; i++) {
        for (let j = 0; j < init[i].length; j++) {
            init[i][j] = r;
            r++;
        }
    }
    console.log(init.join('\n'));
}
console.log(solve(3, 3));