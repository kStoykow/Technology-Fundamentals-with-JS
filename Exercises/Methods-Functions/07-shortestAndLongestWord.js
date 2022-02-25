function stringSort(sentence) {
    return `Longest -> ${longest(sentence)[0]} \n\Shortest -> ${longest(sentence)[longest(sentence).length - 1]}`

    function longest(str) {
        return str.split(/[^a-zA-Z]+/).sort((a, b) => b.length - a.length || -1).filter(e => e != '');
    }
}
console.log(stringSort('Hello people, are you familiar with the terms of application at the software university?'));