function shop(input){

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    
    if((fruit == "banana" || fruit == "apple" || fruit == "orange" || fruit == "grapefruit" || fruit == "kiwi" || fruit == "pineapple" || fruit == "grapes")
    && (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday" || day == "Sunday")){
        switch(day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                if(fruit == "banana" ){
                    price = quantity * 2.5;
                }
                else if(fruit == "apple"){
                    price = quantity * 1.2;
                }
                else if(fruit == "orange"){
                    price = quantity * 0.85;
                }
                else if(fruit == "grapefruit"){
                    price = quantity * 1.45;
                }
                else if(fruit == "kiwi"){
                    price = quantity * 2.70;
                }
                else if(fruit == "pineapple"){
                    price = quantity * 5.50;
                }
                else if(fruit == "grapes"){
                    price = quantity * 3.85;
                }
                break;
            case "Saturday":
            case "Sunday":
                if(fruit == "banana" ){
                    price = quantity * 2.7;
                }
                else if(fruit == "apple"){
                    price = quantity * 1.25;
                }
                else if(fruit == "orange"){
                    price = quantity * 0.9;
                }
                else if(fruit == "grapefruit"){
                    price = quantity * 1.6;
                }
                else if(fruit == "kiwi"){
                    price = quantity * 3;
                }
                else if(fruit == "pineapple"){
                    price = quantity * 5.60;
                }
                else if(fruit == "grapes"){
                    price = quantity * 4.20;
                }
                break;
        }
        console.log(price.toFixed(2));

    }
    else{
        console.log("error");
    }
}