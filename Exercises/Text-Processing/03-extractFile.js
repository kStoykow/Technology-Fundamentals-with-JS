function solve(input) {
    let indexOfFile = input.lastIndexOf('\\');
    let indexOfExtension = input.lastIndexOf('.');
    let file = input.substring(indexOfFile + 1, indexOfExtension);
    let extension = input.substring(indexOfExtension + 1);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')