function carWash(array) {
    let result = calculateCleanProcess();
    console.log(result);


    function calculateCleanProcess() {
        let readyPercent = 0;

        for (let i = 0; i < array.length; i++) {
            let currentCommand = array[i];

            switch (currentCommand) {
                case 'soap': readyPercent += 10;
                    break;
                case 'water': readyPercent *= 1.2;
                    break;
                case 'vacuum cleaner': readyPercent *= 1.25;
                    break;
                case 'mud': readyPercent *= 0.9;
                    break;
            }
        }

        return `The car is ${readyPercent.toFixed(2)}% clean.`;
    }
}