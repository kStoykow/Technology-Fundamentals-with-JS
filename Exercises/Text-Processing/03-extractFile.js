function solve(str) {
    let indexOfFile = str.lastIndexOf('\\');
    let indexOfExtension = str.lastIndexOf('.');
    let file = str.substring(indexOfFile + 1, indexOfExtension);
    let extension = str.substring(indexOfExtension + 1);
    return [`File name: ${file}`, `File extension: ${extension}`].join('\n');
}
console.log(solve('C:\\Internal\\training-internal\\Template.asd.pptx'));