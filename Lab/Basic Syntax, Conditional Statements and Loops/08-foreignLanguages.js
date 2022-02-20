function whatLanguage(country) {
    let languageMap = {
        'England': 'English',
        'USA': 'English',
        'Spain': 'Spanish',
        'Argentina': 'Spanish',
        'Mexico': 'Spanish',
        'unknown': 'unknown'
    }

    return languageMap[languageMap[country] ? country : 'unknown'];
}
console.log(whatLanguage('USA'));