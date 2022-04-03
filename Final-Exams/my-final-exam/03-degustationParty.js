function solve(arr) {
    let likes = {};
    let unliked = 0;
    let r = '';

    const commandsMap = {
        'Like': (likes, guest, meal) => {
            if (likes.hasOwnProperty(guest) == false) {
                likes[guest] = [meal];
            } else if (likes.hasOwnProperty(guest) == true) {
                if (likes[guest].includes(meal) == false) {
                    likes[guest].push(meal);
                }
            }
            return likes;
        },
        'Dislike': (likes, guest, meal) => {
            if (likes.hasOwnProperty(guest) == false) {
                r += `${guest} is not at the party.\n`;
            } else if (likes[guest].includes(meal) == true) {
                likes[guest].splice(likes[guest].indexOf(meal), 1);
                unliked++;
                r += `${guest} doesn't like the ${meal}.\n`;
            } else if (likes[guest].includes(meal) == false) {
                r += `${guest} doesn't have the ${meal} in his/her collection.\n`;
            }
            return likes;
        }
    }
    function outputParse(obj, r) {
        let guests = Object.entries(obj);
        for (const guest of guests) {
            r += `${guest[0]}: ${guest[1].join(', ')}\n`;
        }

        r += `Unliked meals: ${unliked}\n`;
        return r;
    }
    
    for (const e of arr) {
        if (e == 'Stop' == true) {
            return outputParse(likes, r);
        }

        let [c, guest, meal] = e.split('-');
        commandsMap[c](likes, guest, meal);
    }
}
console.log(solve([
    "Like-Krisi-salad",
    "Dislike-Krissi-ssdalad",
    "Stop"])
);