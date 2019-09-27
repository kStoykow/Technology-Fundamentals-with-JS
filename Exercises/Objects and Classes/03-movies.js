function solve(input) {
    let movies = [];

    input.forEach(line => {
        line = line.split(' ');
        if (line.includes('addMovie')) {
            line.shift();
            movies.push({ name: line.join(' ') });

        } else if (line.includes('directedBy')) {
            let indexOf = line.indexOf('directedBy');
            let name = line.slice(0, indexOf).join(' ');
            let director = line.slice(indexOf + 1).join(' ');
            let isThere = movies.find(m => m.name == name);
            movies.forEach(movie => {
                if (movie.name == name) {
                    movie.director = director;
                }
            });

        } else {
            let indexOf = line.indexOf('onDate');
            let name = line.slice(0, indexOf).join(' ');
            let date = line.slice(indexOf + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name == name) {
                    movie.date = date;
                }
            });
        }
    });

    movies.forEach(movie => {
        if (Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie));
        }
    });
}
solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']
)