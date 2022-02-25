function solve(input) {
    let pattern = /(^|(?<=\s))(([a-z0-9]+)([\.\-_]?)([a-z0-9]+)(@)([a-z]+([\.\-_][a-z]+)+))(\b|(?=\s))/gi;
    let validEmails = [];
    let allEmails = input[0].match(pattern);
    if (allEmails != null) {
        for (const currEmail of allEmails) {
            validEmails.push(currEmail);
        }
    }

    for (const email of validEmails) {
        console.log(email);
    }
}
solve(['steve@invali.sd- and steve.parker@softuni.de.'])