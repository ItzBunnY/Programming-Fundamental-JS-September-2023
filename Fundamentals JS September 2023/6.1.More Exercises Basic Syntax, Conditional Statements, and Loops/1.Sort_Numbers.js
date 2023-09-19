function sort(num1, num2, num3){

    let high = 0;
    let mid = 0;
    let low = 0;

    if(num1 > num2  && num1 > num3){
        high = num1;
        if(num2 > num3){
            mid = num2;
            low = num3;
        }
        else{
            mid = num3;
            low = num2;
        }
    }
    else if(num2 > num1 && num2 > num3){
        high = num2;
        if(num1 > num3){
            mid = num1;
            low = num3;
        }
        else{
            mid = num3;
            low = num1;
        }
        
    }
    else if(num3 > num1 && num3 > num2){
        high = num3;
        if(num1 > num2){
            mid = num1;
            low = num2;
        }
        else{
            mid = num2;
            low = num1;
        }
        
    }
    console.log(high);
    console.log(mid);
    console.log(low);
    
}
sort(2,1,3)