function isMagical(matrix) {
    let initialSum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        initialSum += matrix[0][i];
    }

    let isMagical = true;
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let l = 0; l < matrix[j].length; l++) {
            sum += matrix[j][l];
        }

        if (sum !== initialSum) {
            isMagical = false;
        }

        sum = 0;
    }


    for (let columns = 0; columns < matrix[0].length; columns++) {
        let columnsSum = 0;
        for (let rows = 0; rows < matrix.length; rows++) {
            columnsSum += matrix[rows][columns];
        }
        if(columnsSum != initialSum){
            isMagical = false;
        }
    }
    console.log(isMagical);
    

} isMagical(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])