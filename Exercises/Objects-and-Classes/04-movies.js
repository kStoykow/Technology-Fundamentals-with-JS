function solve(data) {
    let collection = [];
    const commandsMap = {
        addMovie: (line, collection) => {
            let movie = line.substring(line.split(' ')[0].length).trim();
            collection.push({ name: movie });
        },

        directedBy: (line, collection, c) => {
            let [movie, director] = line.split(` ${c} `);
            if (collection.filter(e => e.name == movie).length > 0) {
                collection.filter(e => e.name == movie)[0][director] = director;
            }
        },
        onDate: (line, collection, c) => {
            let [movie, date] = line.split(` ${c} `);
            if (collection.filter(e => e.name == movie).length > 0) {
                collection.filter(e => e.name == movie)[0][date] = date;
            }
        }
    }

    const commands = ['addMovie', 'directedBy', 'onDate'];

    for (let line of data) {
        let c = line.split(' ').find(e => commands.includes(e));
        commandsMap[c](line, collection, c);
    }

    return collection.reduce((a, b) => {
        if (Object.keys(b).length == 3) {
            a += `${JSON.stringify(b)}\n`;
        }
        return a;
    }, '');
}
console.log(solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'addMovie Batman',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']
));