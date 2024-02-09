function toyshop(input){

    let trip = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let count = (puzzle + dolls + bears + minions + trucks);
    let sum = (puzzle * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2);

    if(count >= 50){
        sum -= sum * 0.25;
        sum -= sum * 0.10;
    }
    else{
        sum -= sum * 0.1;
    }
     
    if(trip <= sum){
        console.log(`Yes! ${(sum - trip).toFixed(2)} lv left.`)
    }
    else{
        console.log(`Not enough money! ${(trip - sum).toFixed(2)} lv needed.`)
    }
}
toyshop(["40.8","20","25","30","50","10"])