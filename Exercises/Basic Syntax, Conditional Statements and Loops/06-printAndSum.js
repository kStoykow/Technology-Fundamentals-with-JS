function numbers(from, to) {
    let toPrint = '';
    let sum = 0;
    for (let i = from; i <= to; i++) {
        toPrint += i + " ";
        sum += i;
    }
    
    console.log(toPrint);
    console.log(`Sum: ${sum}`);
}