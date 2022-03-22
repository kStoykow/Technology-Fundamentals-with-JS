function solve(arr) {
    let pattern = /(\||#)(?<item>[A-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    let matches = arr[0].matchAll(pattern);
    let food = [];

    for (const match of matches) {
        food.push({
            'Item': match.groups.item,
            'Best before': match.groups.date,
            "Nutrition": match.groups.kcal
        });
    }

    function foodSuppliesCalc(arr) {
        let total = arr.reduce((a, b) => a + Number(b.Nutrition), 0);
        return Math.trunc(total / 2000);
    }
    function outputParse(arr) {
        return `You have food to last you for: ${foodSuppliesCalc(arr)} days!\n${arr.map(e => Object.entries(e).map(tuple => tuple.join(': ')).join(', ')).join('\n')}`;
    }

    return outputParse(food);
}
console.log(solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]));