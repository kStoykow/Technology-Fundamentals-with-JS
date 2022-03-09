function solve(input) {
    let shelfs = [];
    const arrHandler = {
        true: (arr, str) => {
            let [id, genre] = str.split(' -> ');
            if (arr.filter(e => e.id == id) == false) {
                arr.push({ id: id, genre, 'books': {} });
            }
            return arr;
        },
        false: (arr, str) => {
            let [title, info] = str.split(': ');
            let [autor, category] = info.split(', ');

            if (arr.filter(e => e.genre == category).length === 1) {
                let shelf = arr.filter(e => e.genre == category)[0];
                shelf['books'][title] = autor;
            }
            return arr;
        },
    }
    function output(arrOfObjects) {
        let result = '';
        const sortByCount = (a, b) => Object.values(b['books']).length - Object.values(a['books']).length;
        const sortByName = (a, b) => a[0].localeCompare(b[0]);

        for (const obj of arrOfObjects.sort(sortByCount)) {
            let booksKvp = Object.entries(obj.books).sort(sortByName);
            result += `${obj.id} ${obj.genre}: ${Object.values(obj.books).length}\n`;
            result += `${booksKvp.map(e => `--> ${e.join(': ')}`).join('\n')}\n`;
        }
        return result;
    }

    for (const line of input) {
        arrHandler[line.includes(' -> ')](shelfs, line);
    }

    return output(shelfs);
}
console.log(solve([
    '1 -> history',
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
    'Pilots of Stone: Brook Jay, history']));