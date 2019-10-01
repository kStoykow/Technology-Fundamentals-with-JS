function solve(input) {
    let unique = [];
    input
        .map(JSON.parse)
        .forEach(currentArr => {
            if (unique.length != 0) {
                let counter = 0;

                for (let l = 0; l < unique.length; l++) {
                    for (let i = 0; i < currentArr.length; i++) {
                        if (!unique[l].includes(currentArr[i])) {
                            counter++;
                            break;
                        }
                    }
                }

                if (counter == unique.length) {
                    unique.push(currentArr);
                }

            } else {
                unique.push(currentArr);
            }
        });

    unique.sort((a, b) => a.length - b.length);

    for (const arr of unique) {
        arr.sort((a, b) => b - a);
        console.log(`[${arr.join(', ')}]`);
    }
}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)