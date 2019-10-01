function solve(input) {
    let allStudents = [];

    input.forEach(line => {
        let [nameTupple, gradeTupple, avgTupple] = line.split(', ');

        let [nameProp, nameValue] = nameTupple.split(': ');
        let [gradeProp, gradeValue] = gradeTupple.split(': ');
        let [avgProp, avgValue] = avgTupple.split(': ');

        if (Number(avgValue) >= 3) {
            allStudents.push({
                [nameProp]: nameValue,
                [gradeProp]: Number(gradeValue) + 1,
                [avgProp]: Number(avgValue),
            });
        }
    });

    allStudents.sort((a, b) => a.Grade - b.Grade);

    let currentClass = {
        Grade: allStudents[0].Grade,
        'List of students': [allStudents[0]['Student name']],
        'Average annual grade from last year': [allStudents[0]['Graduated with an average score']],
    };

    allStudents.forEach((student, i) => {

        if (currentClass.Grade == student.Grade && i > 0) {
            currentClass['List of students'].push(student['Student name']);
            currentClass['Average annual grade from last year'].push(student['Graduated with an average score']);

        } else if (currentClass.Grade != student.Grade) {
            let avgLength = currentClass['Average annual grade from last year'].length;
            console.log(`${currentClass.Grade} Grade`);
            console.log(`List of students: ${currentClass['List of students'].join(', ')}`);
            console.log(`Average annual grade from last year: ${(currentClass['Average annual grade from last year'].reduce((acc, e) => acc + e) / avgLength).toFixed(2)}`);
            console.log();

            currentClass.Grade = student.Grade;
            currentClass['List of students'].splice(0, currentClass['List of students'].length);
            currentClass['List of students'].push(student['Student name']);
            currentClass['Average annual grade from last year'].splice(0, currentClass['Average annual grade from last year'].length);
            currentClass['Average annual grade from last year'].push(student['Graduated with an average score']);
        }

        if (i == allStudents.length - 1) {
            let avgLength = currentClass['Average annual grade from last year'].length;
            console.log(`${currentClass.Grade} Grade`);
            console.log(`List of students: ${currentClass['List of students'].join(', ')}`);
            console.log(`Average annual grade from last year: ${(currentClass['Average annual grade from last year'].reduce((acc, e) => acc + e) / avgLength).toFixed(2)}`);
            console.log();
        }
    });
}
solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)