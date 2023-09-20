function dontbreak(input){

    let name = String(input[0]);
    let timeEp = Number(input[1]);
    let timeBr = Number(input[2]);

    let lunch = timeBr / 4;
    let relax = timeBr / 8; 
    let watch = timeBr - (lunch + relax);

    if(timeEp <= watch){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(watch - timeEp)} minutes free time.`);
    }
    else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeEp - watch)} more minutes.`);
    }
}
