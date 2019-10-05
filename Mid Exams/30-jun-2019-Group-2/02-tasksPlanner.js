function solve(input) {
    let list = input.shift().split(' ');
    input.pop();

    input.forEach(e => {
        e = e.split(' ');
        if (e.includes('Complete')) {
            let [toDo, i] = e;
            if (list[i]) {
                list[i] = 0;
            }

        } else if (e.includes('Change')) {
            let [toDo, i, time] = e;
            if (list[i]) {
                list[i] = time;
            }

        } else if (e.includes('Drop')) {
            let [toDo, i] = e;
            if (list[i]) {
                list[i] = -1;
            }

        } else if (e.includes('Count')) {
            let [toDo, value] = e;
            if (value == 'Completed') {
                console.log(completed(list));
            } else if (value == 'Incomplete') {
                console.log(incomplete(list).length);
            } else {
                console.log(dropped(list));
            }
        }
    });

    console.log(incomplete(list).join(' '));


    function completed(arr) {
        return arr.filter(e => e == 0).length;
    }

    function incomplete(arr) {
        return arr.filter(e => e > 0);
    }

    function dropped(arr) {
        return arr.filter(e => e < 0).length;
    }
}
solve(['1 2',
    ,
    'Change 0 -2',
    'Count Incompleted',
    'End'
]);