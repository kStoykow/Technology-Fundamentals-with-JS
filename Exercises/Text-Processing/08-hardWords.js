function solve(input) {
    let arr = input[0].split(' ');
    let words = input[1];

    return arr.map(e => {
        if (e.startsWith('_') && e[e.length - 1].match(/\.|\,|\!|\?|\-/)) {
            let padding = e[e.length - 1];
            return words.filter(el => e.length - 1 === el.length)[0] + padding;
        } else if (e.startsWith('_')) {
            return words.filter(el => e.length === el.length)[0];
        }
        return e;
    }).join(' ');
}
console.log(solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]));