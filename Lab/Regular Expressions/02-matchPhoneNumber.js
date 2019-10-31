function solve(input) {
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let numbers = [];

    while ((currNum = pattern.exec(input)) !== null) {
        numbers.push(currNum[0]);
    }

    console.log(numbers.join(', '));
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
)