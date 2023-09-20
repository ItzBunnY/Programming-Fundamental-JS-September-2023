function workHours(input){

    let hour = Number(input[0]);
    let day = input[1];

    if((day == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday")
    && (hour >= 10 && hour <= 18)
    && day != "Sunday"){
        
        console.log("open");
    }
    else{
        console.log("closed");
    }
}
