function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day)
    let nextDayDate = new Date(year, month - 1, date.getDate() + 1)
    return `${nextDayDate.getFullYear()}-${nextDayDate.getMonth() + 1}-${nextDayDate.getDate()}`;
}
console.log(nextDay(2016, 9, 30));