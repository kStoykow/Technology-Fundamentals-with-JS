function sort(...params) {
    return params.sort((a, b) => b - a).join('\n');
}
console.log(sort(4, 6, 3));