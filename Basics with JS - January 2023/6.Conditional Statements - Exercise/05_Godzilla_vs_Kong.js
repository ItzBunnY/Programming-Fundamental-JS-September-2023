function fight(input){

    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let price = Number(input[2]);
    let director = budget * 0.1;
    let extraprice = extra * price;

    if(extra >= 150){
        extraprice -= (extraprice * 0.1);
    }

    if(budget >= extraprice + director){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - (extraprice + director)).toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${((extraprice + director) - budget).toFixed(2)} leva more.`)
    }

}
fight(["9587.88","222","55. 68"])