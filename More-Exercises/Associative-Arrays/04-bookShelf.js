function solve(input) {
    let library = {};

    for (let line of input) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!library.hasOwnProperty(id)) {
                library[id] = {};
                library[id][genre] = [];
            }

        } else {
            line = line.split(': ');
            let bookTitle = line[0];
            let [bookAutor, bookGenre] = line[1].split(', ');

            for (const id in library) {
                let category = Object.keys(library[id]);

                if (category == (bookGenre)) {
                    library[id][category].push({ bookTitle, bookAutor });
                }
            }
        }
    }

    let sortedId = Object.keys(library).sort((a, b) => Object.values(library[b])[0].length - Object.values(library[a])[0].length);

    for (const id of sortedId) {
        let obj = library[id];
        let entries = Object.entries(obj)[0];
        let shelf = entries[0];
        let booksObjArr = entries[1];

        console.log(`${id} ${shelf}: ${booksObjArr.length}`);
        let sortedBooks = booksObjArr.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));

        for (const book of sortedBooks) {
            console.log(`--> ${book.bookTitle}: ${book.bookAutor}`);
        }
    }
}
solve(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])