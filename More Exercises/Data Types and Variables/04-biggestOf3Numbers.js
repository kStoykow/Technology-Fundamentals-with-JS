function biggest(...params) {
    return params.sort((a, b) => b - a)[0];
}
console.log(biggest(23,12,7,123));