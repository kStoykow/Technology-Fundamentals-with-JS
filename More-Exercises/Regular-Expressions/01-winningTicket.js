function solve(input) {
    let splitPattern = /[, ]+/g;
    let allTickets = input[0].split(splitPattern);
    let validPattern = /(\${6,10}|\#{6,10}|\^{6,10}|\@{6,10})/g;
    let result = [];

    for (let ticket of allTickets) {
        if (ticket.length == 20) {
            let leftSide = ticket.substring(0, 10).match(validPattern);
            let rightSide = ticket.substring(10).match(validPattern);

            if ((leftSide != null && rightSide != null) && leftSide[0][0] == rightSide[0][0]) {
                let matchLength = Math.min(leftSide[0].length, rightSide[0].length);
                let symbol = leftSide[0][0];

                if (leftSide[0].length == 10 && rightSide[0].length == 10) {
                    result.push(`ticket "${ticket}" - ${matchLength}${symbol} Jackpot!`);
                } else {
                    result.push(`ticket "${ticket}" - ${matchLength}${symbol}`);
                }

            } else {
                result.push(`ticket "${ticket}" - no match`);
            }

        } else {
            result.push('invalid ticket');
        }
    }

    console.log(result.join('\n'));
}
solve(['$$$$$$$$$$#$$$$$$$$$,  validticketnomatch:('])