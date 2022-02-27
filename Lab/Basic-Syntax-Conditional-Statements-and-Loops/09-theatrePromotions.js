function solve(d, age) {
    let ticketPrice = 0;

    let dayMap = {
        'Weekday': (age, p) => {
            if (age >= 0 && age <= 18) {
                p = 12;
            } else if (age > 18 && age <= 64) {
                p = 18;
            } else if (age > 64 && age <= 122) {
                p = 12;
            } else {
                p = 'Error!';
            }
            return p;
        },
        'Weekend': (age, p) => {
            if (age >= 0 && age <= 18) {
                p = 15;
            } else if (age > 18 && age <= 64) {
                p = 20;
            } else if (age > 64 && age <= 122) {
                p = 15;
            } else {
                p = 'Error!';
            }
            return p;
        },
        'Holiday': (age, p) => {
            if (age >= 0 && age <= 18) {
                p = 5;
            } else if (age > 18 && age <= 64) {
                p = 12;
            } else if (age > 64 && age <= 122) {
                p = 10;
            } else {
                p = 'Error!';
            }
            return p;
        },
    }
    return dayMap[d](age, ticketPrice);
}
console.log(solve('Weekend', 5));