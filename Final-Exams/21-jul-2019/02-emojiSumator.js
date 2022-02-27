function solve(input) {
    let text = input.shift();
    let emoji = input.shift()
        .split(':')
        .reduce((acc, char) => acc + String.fromCharCode(Number(char)), '');

    let pattern = /(?<=[\s]):(?<emojiName>[a-z]{4,}):(?=[\s.,!?])/g;
    let validEmojies = [];
    let totalPower = 0;
    let isMatch = false;

    while ((currentEmoji = pattern.exec(text)) != null) {
        validEmojies.push(currentEmoji[0]);

        for (const letter of currentEmoji.groups.emojiName) {
            totalPower += letter.charCodeAt(0);
        }

        if (currentEmoji.groups.emojiName == emoji) {
            isMatch = true;
        }
    }

    if (isMatch) {
        totalPower *= 2;
    }

    if (validEmojies.length != 0) {
        console.log(`Emojis found: ${validEmojies.join(', ')}`);
    }
    console.log(`Total Emoji Power: ${totalPower}`);
}
solve(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'])