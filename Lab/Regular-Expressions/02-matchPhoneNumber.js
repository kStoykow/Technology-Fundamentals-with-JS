function solve(str) {
    let validNumbers = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let numbers = str.match(validNumbers);
    return numbers.join(', ');
}
console.log(solve(
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")
);