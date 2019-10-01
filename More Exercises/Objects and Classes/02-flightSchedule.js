function solve(input) {
    let allFlights = input.shift();
    let changedStatuses = input.shift();
    let statusToPrint = input.shift()[0];

    let readyFlightsDb = {};
    let cancelledFlightsDb = [];

    for (const currentFlight of allFlights) {
        let [sector, Destination] = currentFlight.split(' ');
        readyFlightsDb[sector] = { Destination, Status: "Ready to fly" };
    }

    if (statusToPrint == 'Ready to fly') {
        for (const changedFlight of changedStatuses) {
            let [sector] = changedFlight.split(' ');
            if (readyFlightsDb.hasOwnProperty(sector)) {
                delete readyFlightsDb[sector];
            }
        }

        let readyFlights = Object.values(readyFlightsDb);
        for (const flight of readyFlights) {
            console.log(flight);
        }

    } else {
        for (const flight of allFlights) {
            let [sector, Destination] = flight.split(' ');
            for (const currentCancelled of changedStatuses) {
                let [cancelledSector] = currentCancelled.split(' ');
                if (sector == cancelledSector) {
                    cancelledFlightsDb.push({ Destination, Status: 'Cancelled' })
                }
            }
        }

        for (const flight of cancelledFlightsDb) {
            console.log(flight);
        }
    }
}
solve([['WN269 Delaware',
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
    'SK430 Cancelled'],
['Cancelled']
])