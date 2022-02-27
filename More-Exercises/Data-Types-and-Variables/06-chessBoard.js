function chessBoard(x) {
    let size = Number(x);
    let currentColour = 'black';
    let r = '<div class="chessboard">\n';

    for (let rows = 1; rows <= size; rows++) {
        r += '  <div>\n'

        for (let columns = 1; columns <= size; columns++) {
            r += `    <span class="${currentColour}"></span>\n`;

            currentColour = currentColour === 'black' ? 'white' : 'black';
        }
        r += '  </div>\n';

        if (size % 2 === 0) {
            currentColour = currentColour === 'black' ? 'white' : 'black';
        }
    }

    r += '</div>';
    return r;
}
console.log(chessBoard(3));