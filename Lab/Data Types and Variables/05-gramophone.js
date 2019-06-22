function rotations(bandName, albumName, songName) {
    let songDurationSeconds = (albumName.length * bandName.length) * (songName.length / 2);
    let plateRotations = Math.ceil(songDurationSeconds / 2.5);
    console.log(`The plate was rotated ${plateRotations} times.`);
}