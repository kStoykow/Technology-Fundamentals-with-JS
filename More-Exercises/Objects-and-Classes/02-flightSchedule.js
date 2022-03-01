function solve(data) {
    let list = data[0]
    function statusHandler(flight, a, dest) {
        if (data[1].filter(e => e.split(' ')[0] == flight).length != 0) {
            let status = data[1].filter(e => e.split(' ')[0] == flight)[0].split(' ')[1];
            a[1].push({ 'Destination': dest.join(' '), ['Status']: status });
        } else {
            a[0].push({ 'Destination': dest.join(' '), ['Status']: 'Ready to fly' });
        }
    }

    let readyAndCancelArr = list.reduce((a, b) => {
        let [flight, ...dest] = b.split(' ');
        statusHandler(flight, a, dest);
        return a;
    }, [[], []]);

    return data[2][0] === 'Ready to fly' ? readyAndCancelArr[0].map(x => JSON.stringify(x)).join('\n') : readyAndCancelArr[1].map(x => JSON.stringify(x)).join('\n')
}
console.log(solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]));