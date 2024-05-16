function sort(num1, num2, num3){

    let high = 0;
    let mid = 0;
    let bottom = 0;

    if(num1 > num2  && num1 > num3){
        if(num2 > num3){
            high = num1;
            mid = num2;
            bottom = num3;
        }
        else{
            high = num1;
            mid = num3;
            bottom = num2;
        }
    }
    else if(num2 > num1 && num2 > num3){
        if(num1 > num3){
            high = num2;
            mid = num1;
            bottom = num3;
        }
        else{
            high = num2;
            mid = num3;
            bottom = num1;
        }
        
    }
    else if(num3 > num1 && num3 > num2){
        if(num1 > num2){
            high = num3;
            mid = num1;
            bottom = num2;
        }
        else{
            high = num3;
            mid = num2;
            bottom = num1;
        }
        
    }
    console.log(high);
    console.log(mid);
    console.log(bottom);   
}