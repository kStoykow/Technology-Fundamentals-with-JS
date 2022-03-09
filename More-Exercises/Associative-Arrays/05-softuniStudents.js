function solve(input) {
    let data = [];
    const aggregateMap = {
        true: (arr, str) => {
            let [course, cap] = str.split(': ');
            let currCourse = arr.find(e => e['course'] == course);

            currCourse == undefined
                ? arr.push({ 'course': course, 'capacity': Number(cap), 'students': [] })
                : currCourse['capacity'] += Number(cap);
        },
        false: (arr, str) => {
            let [userInfo, course] = str.split(' joins ');
            let [nameCredits, email] = userInfo.split(' with email ');
            let name = nameCredits.split(/\[\d+\]/)[0];
            let credits = nameCredits.match(/\[\d+\]/)[0].substring(1, nameCredits.length - name.length - 1);
            let currCourse = arr.find(e => e['course'] == course);

            if (currCourse !== undefined && currCourse['capacity'] > 0) {
                currCourse['students'].push({ 'name': name, 'credits': credits, 'email': email });
                currCourse['capacity']--;
            }
        }
    }
    function outputParse(arr) {
        const sortByStudens = (a, b) => Object.values(b.students).length - Object.values(a.students).length;
        const sortByCredits = (a, b) => b['credits'] - a['credits'];
        let r = '';

        for (const obj of arr.sort(sortByStudens)) {
            r += `${obj.course}: ${obj.capacity} places left\n`;
            let sortedStudents = Object.values(obj.students).sort(sortByCredits);
            for (const student of sortedStudents) {
                r += `--- ${student.credits}: ${student.name}, ${student.email}\n`;
            }
        }
        return r;
    }

    for (const str of input) {
        aggregateMap[str.includes(': ')](data, str);
    }
    return outputParse(data);
}
console.log(
    solve(['JavaBasics: 2',
        'user1[25] with email user1@user.com joins C#Basics',
        'C#Advanced: 3',
        'JSCore: 4',
        'user2[30] with email user2@user.com joins C#Basics',
        'user13[50] with email user13@user.com joins JSCore',
        'user1[25] with email user1@user.com joins JSCore',
        'user8[18] with email user8@user.com joins C#Advanced',
        'user6[85] with email user6@user.com joins JSCore',
        'JSCore: 2',
        'user11[3] with email user11@user.com joins JavaBasics',
        'user45[105] with email user45@user.com joins JSCore',
        'user007[20] with email user007@user.com joins JSCore',
        'user700[29] with email user700@user.com joins JSCore',
        'user900[88] with email user900@user.com joins JSCore']
    ));