function solve(input) {
    let letter = input[0];
    let words = input[1];

    for (const word of words) {
        if (letter.includes('_')) {
            letter = letter.split(' ');

            for (const i in letter) {
                if (letter[i].startsWith('_')) {
                    if (letter[i].length == word.length) {
                        letter[i] = word;
                    }

                    if (letter[i].endsWith('.') || letter[i].endsWith(',') || letter[i].endsWith('!')) {
                        if (letter[i].length - 1 == word.length) {
                            let commas = letter[i].substring(letter[i].length - 1);
                            letter[i] = word.concat(commas);
                        }
                    }
                }
            }

            letter = letter.join(' ');
        }
    }

    console.log(letter);
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])