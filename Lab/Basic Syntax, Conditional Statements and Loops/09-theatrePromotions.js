function theatreTickets(day, age) {
    let ticketPrice = 0;
    
    if (age >= 0 && age <= 18) {

        if (day === 'Weekday') {
            ticketPrice = 12;
        } else if (day === 'Weekend') {
            ticketPrice = 15;
        } else {
            ticketPrice = 5;
        }

        console.log(`${ticketPrice}$`);

    } else if (age > 18 && age <= 64) {

        if (day === 'Weekday') {
            ticketPrice = 18;
        } else if (day === 'Weekend') {
            ticketPrice = 20;
        } else {
            ticketPrice = 12;
        }

        console.log(`${ticketPrice}$`);

    } else if (age > 64 && age <= 122) {
        if (day === 'Weekday') {
            ticketPrice = 12;
        } else if (day === 'Weekend') {
            ticketPrice = 15;
        } else {
            ticketPrice = 10;
        }

        console.log(`${ticketPrice}$`);

    } else {
        console.log('Error!');
    }
}
theatreTickets()