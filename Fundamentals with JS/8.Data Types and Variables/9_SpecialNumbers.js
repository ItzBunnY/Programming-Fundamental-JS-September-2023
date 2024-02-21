function solve(num){

     let sum = 0; 
     for(let i = 1; i <= num; i++){

        sum = i % 10 + parseInt(i / 10);

        console.log(sum == (5,7,11) ? i + " False" : i + " True");
     }
     console.log(sum);
}
solve(15)