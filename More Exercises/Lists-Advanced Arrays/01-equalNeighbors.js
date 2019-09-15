function findNeighbors(array) {
    let neighbors = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (i != 0) {
                if (array[i][j] === array[i - 1][j]) {
                    neighbors++;
                }

                if (array[i][j] === array[i][j + 1]) {
                    neighbors++;
                }

            } else {
                if (array[i][j] === array[i][j + 1]) {
                    neighbors++;
                }
            }
        }
    }

    return neighbors;
}
findNeighbors([
    ['16', '6', '5', '6'],
    ['5', '6', '7', '5'],
    ['1', '6', '6', '4']]);