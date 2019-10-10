function solve(input) {
    let studentsInfo = new Map();
    for (let line of input) {
        line = line.split(' ');
        let name = line.shift();
        let grades = [...line].map(Number);

        if (!studentsInfo.has(name)) {
            studentsInfo.set(name, grades);
        } else {
            let currGrades = studentsInfo.get(name);
            studentsInfo.set(name, currGrades.concat(grades));
        }
    }

    let sorted = [...studentsInfo].sort((a, b) => a[1].reduce((a, b) => a + b) / a[1].length - b[1].reduce((a, b) => a + b) / b[1].length)

    for (const student of sorted) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])