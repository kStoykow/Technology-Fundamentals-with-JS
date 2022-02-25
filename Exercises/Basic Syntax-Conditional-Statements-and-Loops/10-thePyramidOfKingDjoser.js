function pyramid(start, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let step = 0;

    const isGoldStepMap = {
        true: (gold, start, stone, lapis, marble, step) => {
            let currStone = (start - 2) * (start - 2);
            stone += currStone;

            if (step % 5 === 0) {
                let currLapis = (start * start) - currStone;
                lapis += currLapis;

            } else {
                let currMarble = (start * start) - currStone;
                marble += currMarble;
            }
            return [gold, start, stone, lapis, marble, step]
        },
        false: (gold, start, stone, lapis, marble, step) => {
            gold = start * start;
            return [gold, start, stone, lapis, marble, step]

        }
    }
    for (let i = start; i > 0; i -= 2) {
        step++;
        height += increment;

        [gold, start, stone, lapisLazuli, marble, step] = isGoldStepMap[i > 2](gold, start, stone, lapisLazuli, marble, step);
        start -= 2;
    }
    [stone, marble, lapisLazuli, gold] = [stone, marble, lapisLazuli, gold].map(e => e *= increment);

    return `Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${Math.ceil(gold)}
Final pyramid height: ${Math.floor(height)}`;
}
console.log(pyramid(11, 1));