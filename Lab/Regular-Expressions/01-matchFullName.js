function solve(input) {
    let regex = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
    let validNames = [];

    while ((currName = regex.exec(input)) != null) {
        validNames.push(currName[0]);
    }

    console.log(validNames.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)