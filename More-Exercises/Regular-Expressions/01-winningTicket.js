function solve(input) {
    let allTickets = input.split(/[, ]+/g);
    let validPattern = /(\${6,10}|\#{6,10}|\^{6,10}|\@{6,10})/g;
    let result = '';

    for (let ticket of allTickets) {
        if (ticket.length == 20) {
            let left = ticket.substring(0, 10).match(validPattern);
            let right = ticket.substring(10).match(validPattern);

            if ((left != null && right != null) && left[0][0] == right[0][0]) {
                let matchLength = Math.min(left[0].length, right[0].length);
                let symbol = left[0][0];

                if (left[0].length == 10 && right[0].length == 10) {
                    result += `ticket "${ticket}" - ${matchLength}${symbol} Jackpot!\n`;
                } else {
                    result += `ticket "${ticket}" - ${matchLength}${symbol}\n`;
                }

            } else {
                result += `ticket "${ticket}" - no match\n`;
            }

        } else {
            result += 'invalid ticket\n';
        }
    }

    return result;
}
console.log(solve('$$$$$$$$$$#$$$$$$$$$,  validticketnomatch:('));