function fishing(input){

    let budget = input[0];
    let season = input[1];
    let count = input[2];
    let sum = 0;

    switch (season){
        case "Spring":
            sum += 3000;
            break;
        case "Summer":
        case "Autumn":
            sum += 4200;
            break;
        case "Winter":
            sum += 2600;
            break;
    }

    if (count <= 6){
        sum *= 0.9;
    }
    else if (count > 7 && count <= 11){
        sum *= 0.85;
    }
    else{
        sum *= 0.75;
    }

    if (season != "Autumn" && (count % 2 == 0)){
        sum *= 0.95;
    } 

    if (sum <= budget){
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva.`);
    }
}
fishing(["3600", "Autumn", "6"])