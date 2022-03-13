function solve(str) {
    let validName = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let output = str.match(validName);

    console.log(output.join(' '));
}
console.log(solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"));