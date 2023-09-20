function depcalc(input){
    
    let dep = Number(input[0]);
    let month = Number(input[1]);
    let percent = Number(input[2]) * 0.01;
    let sum = dep + month * ((dep * percent) / 12);

    console.log(sum);
}
depcalc(["2350", "6", "7"]);