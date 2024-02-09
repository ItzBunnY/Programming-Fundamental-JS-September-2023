function outfit(input){

    let deg = Number(input[0]);
    let time = input[1];
    let fit = "";
    let shoes = "";

    if(deg >= 10 && deg <= 18){
        switch(time){
            case "Morning":
                fit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                fit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                fit = "Shirt";
                shoes = "Moccasins";
                break;            
        }
    }
    else if(deg > 18 && deg <= 24){
        switch(time){
            case "Morning":
                fit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                fit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                fit = "Shirt";
                shoes = "Moccasins";
                break; 
        }
    }
    else if(deg >= 25){
        switch(time){
            case "Morning":
                fit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                fit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                fit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    console.log(`It's ${deg} degrees, get your ${fit} and ${shoes}.`);
}