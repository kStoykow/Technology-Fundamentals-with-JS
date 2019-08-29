function dna(repeat) {
    let result = visualizeDna();
    console.log(result);
    
    function visualizeDna() {
        let sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
        let toPrint = '';

        for (let i = 0; i < repeat; i++) {
            let currentElement = sequence.shift();
            let nextElement = sequence.shift();

            if (i === 0 || i % 4 === 0) {
                toPrint += `**${currentElement}${nextElement}**\n`;
                sequence.push(currentElement, nextElement);

            } else if (i === 1 || i % 4 === 1) {
                toPrint += `*${currentElement}--${nextElement}*\n`;
                sequence.push(currentElement, nextElement);

            } else if (i === 2 || i % 4 === 2) {
                toPrint += `${currentElement}----${nextElement}\n`;
                sequence.push(currentElement, nextElement);

            } else if (i === 3 || i % 4 === 3) {
                toPrint += `*${currentElement}--${nextElement}*\n`;
                sequence.push(currentElement, nextElement);
            }
        }
        return toPrint;
    }
}