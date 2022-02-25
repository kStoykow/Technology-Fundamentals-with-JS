function sorting(arr) {
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');  
}
console.log(sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));