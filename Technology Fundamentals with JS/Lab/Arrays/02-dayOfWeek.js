function dayOfWeek(arrOfNums) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (arrOfNums > 0 && arrOfNums <= 7) {
        console.log(days[arrOfNums - 1]);
    } else {
        console.log('Invalid day!');
    }

} 
dayOfWeek(7)