function solve(input) {
    let songsCount = input.shift();
    let typeToPrint = input.pop();

    let songsData = [];
    class Song {
        constructor(type, name, length) {
            this.type = type;
            this.name = name;
            this.length = this.length;
        }
    }

    input.forEach(song => {
        let [type, name, length] = song.split('_');
        let currSong = new Song(type, name, length);
        if (currSong.type == typeToPrint || typeToPrint == 'all') {
            songsData.push(currSong);
        }
    });

    for (const song of songsData) {
        console.log(song.name);
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)