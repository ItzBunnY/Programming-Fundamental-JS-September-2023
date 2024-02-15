function solve(num1,num2,num3){
    let top = 0;
    let mid = 0;
    let bot = 0;

    if (num1 > num2 && num1 > num3){
        top = num1;
        if(num2 > num3){
            mid = num2;
            bot = num3;
        }
        else{
            mid = num3;
            bot = num2;  
        }
    }
    else if(num2 > num1 && num2 > num3){
        top = num2;
        mid = num3;
        bot = num1;
    }
    else if (num3 > num1 && num3 > num2){
        top = num3;
        mid = num1;
        bot = num2;  
    }
    console.log(top);
    console.log(mid);
    console.log(bot);

}
solve(-2,1,3)