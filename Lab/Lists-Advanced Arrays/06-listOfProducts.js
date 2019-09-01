function list(array) {
    let result = array
        .sort()
        .map((e, i) => `${i + 1}.` + e);

    for (const element of result) {
        console.log(element);
    }
}