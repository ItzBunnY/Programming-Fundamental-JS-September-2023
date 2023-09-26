function nextDaySolve(num1, num2, num3){

    let nextDay = new Date(num1, num2 - 1, num3 + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDaySolve(2016, 9, 30);