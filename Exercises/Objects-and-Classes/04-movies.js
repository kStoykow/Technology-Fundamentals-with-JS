function solve(data) {
    let collection = [];
    let result = '';

    const commandsMap = {
        addMovie: (line, collection) => {
            let movie = line.substring(line.split(' ')[0].length).trim();
            collection.push({ name: movie });
        },

        directedBy: (line, collection, c) => {
            let [movie, autor] = line.split(` ${c} `);
            for (const obj of collection) {
                if (obj.name === movie) {
                    obj.director = autor;
                }
            }
        },
        onDate: (line, collection, c) => {
            let [movie, date] = line.split(` ${c} `);
            for (const obj of collection) {
                if (obj.name === movie) {
                    obj.date = date;
                }
            }
        }
    }

    for (let line of data) {
        let commands = ['addMovie', 'directedBy', 'onDate'];
        let c = line.split(' ').find(e => commands.includes(e));
        commandsMap[c](line, collection, c);
    }

    for (let obj of collection) {
        if (Object.keys(obj).length == 3) {
            result += `${JSON.stringify(obj)}\n`;
        }
    }

    return result;
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