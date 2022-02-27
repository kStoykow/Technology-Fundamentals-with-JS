function solve(data) {
    let songsToPrint = data.shift();
    let typeToPrint = data.pop();

    let songs = new Array(data.filter(e => e.includes("all") || e.includes(typeToPrint)).length);

    class Song {
        constructor(type, name, length) {
            this.type = type;
            this.name = name;
            this.length = length;
        }
    }
    for (let i = 0; i < songsToPrint; i++) {
        let [type, name, length] = data[i].split('_');
        let song = new Song(type, name, length);
        if (song.type == typeToPrint || typeToPrint == 'all') {
            songs[i] = song;
        }
    }

    let r = '';
    console.log(songs);
    songs.map(obj => r += `${obj.name}\n`);
    console.log(songs);
    return r;
}
console.log(solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']));