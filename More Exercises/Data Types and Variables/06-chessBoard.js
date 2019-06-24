function chessBoard(size) {
    let currentColor = 'black';
    let previousColor = '';
    console.log('<div class="chessboard">');

    for (let rows = 0; rows < size; rows++) {
        console.log('  <div>');
        for (let columns = 0; columns < size; columns++) {
            console.log(`    <span class="${currentColor}"></span>`);
            previousColor = currentColor;

            if (currentColor === 'black') {
                currentColor = 'white';
            } else {
                currentColor = 'black';
            }
        }

        console.log('  </div>');
        if (size % 2 === 0) {
            previousColor = currentColor;
            if (previousColor === 'black') {
                currentColor = 'white';
            } else {
                currentColor = 'black';
            }
        }
    }
    console.log('  </div>');
}