function solve(search, str) {
    let text = str.split(' ');
    for (const e of text) {
        if (search.toLowerCase() == e.toLowerCase()) {
            return search;
        }
    }
    return `${search} not found!`;
}
console.log(solve('javascript', 'JavaScript is the best programming language'));


function solve2(search, str) {
    let regex = new RegExp(`${search}`, 'i');
    return str.match(regex) != null ? search : `${search} not found!`;
}
console.log(solve2('javascript', 'JavaScript is the best programming language'));