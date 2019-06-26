function sequences(input) {
    let array = input[0].split(' ');
    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentSequence = [];
        while (i !== array.length && array[i] === array[i + 1]) {
            currentSequence.push(array[i]);
            i++;
        }
        currentSequence.push(array[i]);

        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }

    console.log(maxSequence.join(' '));
}