function journey(input){

    let budget = input[0];
    let season = input[1];
    let destination = "";
    let stay = "";

    if (season = "summer" && budget < 1000){
        stay = "Camp";
    }
    else{
        stay = "Hotel";
    }

    if (budget <= 100){
        destination = "Bulgaria";
    }
    else if (budget <= 1000){
        destination = "Balkans";
    }
    else{
        destination = "Europe"
    }


}
