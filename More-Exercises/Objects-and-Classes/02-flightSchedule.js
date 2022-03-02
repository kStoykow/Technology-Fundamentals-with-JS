function output(arr, checker) {
    return checker === 'Ready to fly'
        ? arr[0].map(x => JSON.stringify(x)).join('\n')
        : arr[1].map(x => JSON.stringify(x)).join('\n')
}
function statusHandler(flight, agg, destructed, canceledFlights) {
    if (canceledFlights.filter(e => e.split(' ')[0] == flight).length != 0) {
        let status = canceledFlights.filter(e => e.split(' ')[0] == flight)[0].split(' ')[1];
        agg[1].push({ 'Destination': destructed.join(' '), ['Status']: status });
    } else {
        agg[0].push({ 'Destination': destructed.join(' '), ['Status']: 'Ready to fly' });
    }
}

function flightsScheduleHandler(data, output, statusHandler) {
    let flights = data[0];

    let readyAndCancelArr = flights.reduce((a, b) => {
        let [flight, ...dest] = b.split(' ');
        statusHandler(flight, a, dest, data[1]);
        return a;
    }, [[], []]);

    return output(readyAndCancelArr, data[2][0]);
}
console.log(flightsScheduleHandler(
    [['WN269 Delaware',
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
    ], output, statusHandler)
);