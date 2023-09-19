function vacation(people, group, day){
    let price = 0;
    let totalPrice = 0;

    switch (day){
        case "Friday":
            if(group == "Students"){
                price = 8.45;
            }
            else if(group == "Business"){
                price = 10.90;
            }
            else if(group == "Regular"){
                price = 15;
            }
        break;
        case "Saturday":
            if(group == "Students"){
                price = 9.80;
            }
            else if(group == "Business"){
                price = 15.60;
            }
            else if(group == "Regular"){
                price = 20;
            }
        break;
        case "Sunday":
            if(group == "Students"){
                price = 10.46;
            }
            else if(group == "Business"){
                price = 16;
            }
            else if(group == "Regular"){
                price = 22.50;
            }
        break;
    }
    totalPrice = price * people;

    if(group == "Students" && people >= 30){
        totalPrice *= 0.85;
    }
    else if(group == "Business" && people >= 100){
        totalPrice -= price * 10;
    }
    else if(group == "Regular" && people >= 10 && people <= 20){
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");