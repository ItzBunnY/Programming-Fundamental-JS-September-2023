function Pesho(input){

    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);
    let gpuPrice = gpu * 250;
    let cpuPrice = cpu * (gpuPrice * 0.35);
    let ramPrice = ram * (gpuPrice * 0.1);
    let total = gpuPrice + cpuPrice + ramPrice;

    if(gpu > cpu){
        total = total - (total * 0.15);
    }

    if(budget >= total){
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
    }
    else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }

}
