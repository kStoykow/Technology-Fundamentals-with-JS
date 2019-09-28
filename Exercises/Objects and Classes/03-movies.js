function solve(input) {
    let movies = [];

    input.forEach(line => {
        line = line.split(' ');
        if (line.includes('addMovie')) {
            line.shift();
            movies.push({ name: line.join(' ') });

        } else if (line.includes('directedBy')) {
            let [name, director] = line.join(' ').split(' directedBy ');
            movies.forEach(movie => {
                if (movie.name == name) {
                    movie.director = director;
                }
            });


        } else {
            let [name, date] = line.join(' ').split(' onDate ');

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