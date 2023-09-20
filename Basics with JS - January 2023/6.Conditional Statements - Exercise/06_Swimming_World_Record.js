function swimming(input){

    let record = Number(input[0]);
    let meter = Number(input[1]);
    let secounds = Number(input[2]);
    let total = ((meter * secounds) + (Math.floor(meter / 15) * 12.5));

    if(record <= total){
        console.log(`No, he failed! He was ${(total - record).toFixed(2)} seconds slower.`)
    }
    else{
        console.log(`Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`);
    }
}
