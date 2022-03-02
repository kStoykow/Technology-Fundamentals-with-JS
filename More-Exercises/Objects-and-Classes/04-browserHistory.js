function solve(browser, commands) {
    const commandsHandler = {
        'Open': (obj, site) => {
            obj['Open Tabs'].push(site[0]);
            obj['Browser Logs'].push(`Open ${site[0]}`);
            return obj;
        },
        'Close': (obj, site) => {
            if (obj['Open Tabs'].includes(site[0])) {
                obj['Browser Logs'].push(`Close ${site[0]}`);
                obj['Recently Closed'].push(obj['Open Tabs'].splice(obj['Open Tabs'].indexOf(site[0]), 1)[0]);
            }
            return obj;
        },
        'Clear': (obj) => {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
            return obj;
        }
    }
    function outputFormatter(obj) {
        let result = `${Object.values(obj)[0]}\n`;

        Object.entries(obj).slice(1).forEach(kvp => {
            result += `${kvp[0]}: ${kvp[1].join(', ')}\n`;
        })
        return result;
    }

    for (const command of commands) {
        let [c, ...rest] = command.split(' ');
        commandsHandler[c](browser, rest);
    }

    return outputFormatter(browser);
}
console.log(solve({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", 'Close Google', "Open StackOverFlow", "Open Google"]
));