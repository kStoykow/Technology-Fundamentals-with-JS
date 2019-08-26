function stringSort(sentence) {
    let result = wordsLength();
    console.log(result);

    function wordsLength() {
        let toPrint = '';
        let array = sentence.split(' ');
        let longest = '';
        let shortest = '';

        for (let i = 1; i < array.length; i++) {
            let currentWord = array[i];
            let lastChecked = array[i - 1];
            if (i === 1) {
                shortest = lastChecked;
                longest = lastChecked;
            }

            if (currentWord.length > longest.length) {
                longest = currentWord;
            }

            if (currentWord.length < shortest.length) {
                shortest = currentWord;
            }
        }

        toPrint = `Longest -> ${longest} \n\Shortest -> ${shortest}`;
        return toPrint;
    }
}