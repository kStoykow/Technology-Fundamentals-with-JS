function extract(arr) {
    return arr.filter((e, i) => arr.slice(0, i).every(element => e >= element)).join(' '); 
}
console.log(extract([1, 1, 2, 1]));