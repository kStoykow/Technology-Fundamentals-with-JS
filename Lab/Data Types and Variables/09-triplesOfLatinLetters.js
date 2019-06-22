function tripleOfLatins(number) {

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            for (let l = 0; l < number; l++) {
                let toPrint = '';
                toPrint += String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + l);
                console.log(toPrint);
            }
        }
    }
}