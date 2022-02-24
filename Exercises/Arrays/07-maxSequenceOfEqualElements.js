function sequences(data) {
    let arr = data[0].split(' ');
    let maxSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currSeq = [];
        while (i !== arr.length && arr[i] === arr[i + 1]) {
            currSeq.push(arr[i]);
            i++;
        }
        currSeq.push(arr[i]);

        if (currSeq.length > maxSequence.length) {
            maxSequence = currSeq;
        }
    }

    return maxSequence.join(' ');
}