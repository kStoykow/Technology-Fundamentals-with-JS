function solve(input) {
    let command = input.shift();
    let acc = {};

    let follower = (obj, name) => {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
            obj[name]['likes'] = 0;
            obj[name]['comments'] = 0;
            return obj;
        }
        return;
    };
    let like = (obj, name, count) => {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
            obj[name]['likes'] = Number(count);
            obj[name]['comments'] = 0;
            return obj;
        } else {
            obj[name]['likes'] += Number(count);
            return obj;
        }
    };
    let comment = (obj, name) => {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
            obj[name]['comments'] = 1;
            obj[name]['likes'] = 0;
            return obj;
        } else {
            obj[name]['comments']++;
            return obj;
        }
    };
    let block = (obj, name) => {
        if (obj.hasOwnProperty(name)) {
            delete obj[name];
            return obj;
        }
        console.log(`${name} doesn't exist.`);
        return;
    }

    while (command != 'Log out') {
        if (command.includes('New follower')) {
            let [, user] = command.split(': ');
            follower(acc, user);

        } else if (command.includes('Like')) {
            let [, user, count] = command.split(': ');
            like(acc, user, count);

        } else if (command.includes('Comment')) {
            let [, user] = command.split(': ');
            comment(acc, user);

        } else if (command.includes('Blocked')) {
            let [, user] = command.split(': ');
            block(acc, user);
        }

        command = input.shift();
    }

    console.log(`${Object.keys(acc).length} followers`);
    Object
        .entries(acc)
        .sort((a, b) => Object.values(b[1]).reduce((acc, e) => acc + e, 0) -
            Object.values(a[1]).reduce((acc, e) => acc + e, 0) || a[0].localeCompare(b[0]))
        .forEach(([name, nameValues]) => {
            let statistic = Object.values(nameValues).reduce((acc, e) => acc + e, 0);
            console.log(`${name}: ${statistic}`);
        });
}
solve([
    'Like: qwe: 0',
    'Blocked: qwe',
    'Log out'])