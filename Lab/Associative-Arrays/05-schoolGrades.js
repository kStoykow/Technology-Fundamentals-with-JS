function objEntriesGenerator(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [name, ...grades] = b.split(' ');
        if (!a.hasOwnProperty(name)) {
            a[name] = grades;
        } else {
            a[name].push(...grades);
        }
        return a;
    }, {}));
}
function mapEntriesGenerator(arr) {
    return Array.from(arr.reduce((a, b) => {
        let [name, ...grades] = b.split(' ');
        if (!a.has(name)) {
            a.set(name, grades);
        } else {
            a.set(name, [...a.get(name), ...grades]);
        }
        return a;
    }, new Map()));
}

function alphabeticalNameSort(arrOfTuples) {
    return arrOfTuples.sort((a, b) => a[0].localeCompare(b[0]));
}
function avgGradeCalc(student) {
    return student.map(x => [x[0], (x[1].reduce((a, b) => Number(a) + Number(b), 0) / x[1].length).toFixed(2)]);
}
function deserializeOutput(arrOfTuples) {
    return arrOfTuples.map(([name, grade] = x) => `${name}: ${grade}`).join('\n');
}


function objGradesHandler(data, generator, sort, avgGrade, output) {
    return output(avgGrade(sort(generator(data))));
}
function mapGradesHandler(data, generator, sort, avgGrade, output) {
    return output(avgGrade(sort(generator(data))));
}

console.log(objGradesHandler(
    ['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'],
    objEntriesGenerator, alphabeticalNameSort, avgGradeCalc, deserializeOutput
));
console.log();
console.log(mapGradesHandler(
    ['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'],
    mapEntriesGenerator, alphabeticalNameSort, avgGradeCalc, deserializeOutput
));
