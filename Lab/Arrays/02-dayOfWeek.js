function dayOfWeek(d) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (d > 0 && d <= days.length) {
        return days[d - 1];
    } else {
        return 'Invalid day!';
    }
}
console.log(dayOfWeek(5));