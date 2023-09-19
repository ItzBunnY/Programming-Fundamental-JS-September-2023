function sumodd(n){

    let sum = 0;
    if(n >= 1 && n <= 100){
        for(let i = 1; i <= n * 2; i++){
            if(i % 2 !==0){
                console.log(i);
                sum += i;

            }
        }
        console.log(`Sum: ${sum}`);
    }
}
sumodd(5)