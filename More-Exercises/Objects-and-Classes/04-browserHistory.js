const commandsHandler = {
    'Open': (browserObj, site) => {
        browserObj['Open Tabs'].push(site);
        browserObj['Browser Logs'].push(`Open ${site}`);
        return browserObj;
    },
    'Close': (obj, site) => {
        if (obj['Open Tabs'].includes(site)) {
            obj['Browser Logs'].push(`Close ${site}`);
            obj['Recently Closed'].push(obj['Open Tabs'].splice(obj['Open Tabs'].indexOf(site), 1)[0]);
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
function browserStatusHandler(browser, commands, map, formatter) {
    for (const command of commands) {
        let [c, site] = command.split(' ');
        map[c](browser, site);
    }
    return formatter(browser);
}
console.log(browserStatusHandler({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", 'Close Google', "Open StackOverFlow", "Open Google"], commandsHandler, outputFormatter
));