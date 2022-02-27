function rotations(band, album, song) {
    let plateRotations = Math.ceil((album.length * band.length) * (song.length / 2) / 2.5);
    return `The plate was rotated ${plateRotations} times.`;
}