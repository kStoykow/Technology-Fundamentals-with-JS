function crystalSynthesis(input) {
    let result = operations();
    console.log(result);

    if (input.length > 1) {
        console.log(operations());
    }

    function operations() {
        let goal = input[0];
        let startingChunk = Number(input.splice(1, 1));
        let currentThickness = startingChunk;
        let cuts = 0;
        let laps = 0;
        let grinds = 0;
        let etchs = 0;
        let xRays = 0;
        let toPrint = `Processing chunk ${startingChunk} microns\n`;

        while ((currentThickness / 4) >= goal) {
            currentThickness /= 4;
            cuts++;
            if (currentThickness === goal) {
                break;
            }
        }

        if (cuts != 0) {
            toPrint += `Cut x${cuts}\nTransporting and washing\n`;
            currentThickness = Math.floor(currentThickness);
        }

        if (currentThickness === goal) {
            toPrint += `Finished crystal ${currentThickness} microns\n`;
            return toPrint;
        }

        while ((currentThickness * 0.8) >= goal) {
            currentThickness *= 0.8;
            laps++;
            if (currentThickness === goal) {
                break;
            }
        }

        if (laps != 0) {
            toPrint += `Lap x${laps}\nTransporting and washing\n`;
            currentThickness = Math.floor(currentThickness);
        }

        if (currentThickness === goal) {
            toPrint += `Finished crystal ${currentThickness} microns\n`;
            return toPrint;
        }

        while ((currentThickness - 20) >= goal) {
            currentThickness -= 20;
            grinds++;
            if (currentThickness === goal) {
                break;
            }
        }

        if (grinds != 0) {
            toPrint += `Grind x${grinds}\nTransporting and washing\n`;
            currentThickness = Math.floor(currentThickness);
        }

        if (currentThickness === goal) {
            toPrint += `Finished crystal ${currentThickness} microns\n`;
            return toPrint;
        }

        while (((currentThickness - 2) >= goal) || ((currentThickness - 2) === (goal - 1))) {
            currentThickness -= 2;
            etchs++;
            if (currentThickness === goal) {
                break;
            }
        }

        if (etchs != 0) {
            toPrint += `Etch x${etchs}\nTransporting and washing\n`;
            currentThickness = Math.floor(currentThickness);
        }

        if (currentThickness === goal) {
            toPrint += `Finished crystal ${currentThickness} microns\n`;
            return toPrint;
        }

        if (currentThickness < goal) {
            currentThickness += 1;
            xRays++;
            toPrint += `X-ray x${xRays}\nFinished crystal ${currentThickness} microns\n`;
            return toPrint;
        }
    }
}