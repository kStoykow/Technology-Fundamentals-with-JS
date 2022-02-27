function solve(input) {
    input.pop();
    let bestBatch = [Number.MIN_SAFE_INTEGER];

    for (let batch of input) {
        let currBatch = batch.split('#').map(Number);
        let isBetter = false;

        if (sum(currBatch) > sum(bestBatch)) {
            isBetter = true;

        } else if (sum(currBatch) == sum(bestBatch)) {
            if (average(currBatch) > average(bestBatch)) {
                isBetter = true;
            } else if (average(currBatch) == average(bestBatch) && currBatch.length < bestBatch.length) {
                isBetter = true;
            }
        }

        if (isBetter) {
            bestBatch = currBatch;
        }
    }

    console.log(`Best Batch quality: ${sum(bestBatch)}`);
    console.log(`${bestBatch.join(' ')}`);


    function sum(arr) {
        return arr.reduce((acc, e) => acc + e);
    }

    function average(arr) {
        return sum(arr) / arr.length;
    }
}
solve(['5#3#2',
'10#2#-2#1#-1',
'4#2#1',
'Bake It!']);