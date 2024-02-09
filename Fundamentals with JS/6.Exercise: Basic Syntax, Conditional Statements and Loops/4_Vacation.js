function solve(groupCount, groupType, day, price){

    switch(groupType){
        case "Students":
            if(day == "Friday"){
                price = 8.45 * groupCount;
            }
            else if(day == "Saturday"){
                price = 9.8 * groupCount;
            }
            else if(day == "Sunday"){
                price = 10.46 * groupCount;
            }
            if(groupCount >= 30){
                price *= 0.85;
            }
            break;

        case "Business":
            if(day == "Friday"){
                price = 10.9 * groupCount;
            }
            else if(day == "Saturday"){
                price = 15.6 * groupCount;
            }
            else if(day == "Sunday"){
                price = 16 * groupCount;
            }
            if(groupCount >= 100){
                price -= 10 * price / groupCount;
            }
            break;

        case "Regular":
            if(day == "Friday"){
                price = 15 * groupCount;
            }
            else if(day == "Saturday"){
                price = 20 * groupCount;
            }
            else if(day == "Sunday"){
                price = 22.5 * groupCount;
            }
            if(groupCount >= 10 && groupCount <= 20){
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(100, "Business", "Sunday")