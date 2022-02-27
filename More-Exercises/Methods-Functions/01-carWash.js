function carWash(arr) {
    const cleaningMap = {
        'soap': (x) => x += 10, 'water': (x) => x *= 1.2, 'vacuum cleaner': (x) => x *= 1.25, 'mud': (x) => x *= 0.9
    }
    return calculateCleanProcess(arr, cleaningMap);

    function calculateCleanProcess(arr, map) {
        let howClean = 0;

        for (let i = 0; i < arr.length; i++) {
            let command = arr[i];
            howClean = map[command](howClean);
        }

        return `The car is ${howClean.toFixed(2)}% clean.`;
    }
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));