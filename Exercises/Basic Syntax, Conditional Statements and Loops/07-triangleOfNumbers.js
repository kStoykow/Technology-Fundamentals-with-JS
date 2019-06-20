function triangle(num) {
    for (let rows = 1; rows <= num; rows++) {
        let toPrint = " ";

        for (let columns = 1; columns <= rows; columns++) {
            toPrint += rows + ' ';
        }
        console.log(toPrint);
    }
} 