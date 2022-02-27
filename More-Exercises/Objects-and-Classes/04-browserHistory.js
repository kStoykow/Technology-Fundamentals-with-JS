function solve(browsers, commands) {
    commands.forEach(currCommand => {
        let command = currCommand.split(' ')[0];
        let site = currCommand.split(' ')[1];
        if (command == 'Open') {
            browsers['Open Tabs'].push(site);
            browsers['Browser Logs'].push(currCommand);

        } else if (command == 'Close') {
            if (browsers['Open Tabs'].includes(site)) {
                let indexOf = browsers['Open Tabs'].indexOf(site);
                let closedSite = browsers['Open Tabs'][indexOf];
                browsers['Open Tabs'].splice(indexOf, 1);
                browsers['Recently Closed'].push(closedSite);
                browsers['Browser Logs'].push(currCommand);
            }

        } else {
            for (const prop in browsers) {
                if (prop != 'Browser Name') {
                    browsers[prop].splice(0);
                }
            }
        }
    });

    console.log(browsers['Browser Name']);
    console.log(`Open Tabs: ${browsers['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browsers['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browsers['Browser Logs'].join(', ')}`);
}
solve({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

);