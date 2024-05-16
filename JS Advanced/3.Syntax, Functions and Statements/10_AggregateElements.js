function solve(input){

    let sum = 0;
    let invSum = 0;
    let concat = '';

    for(let i = 0; i < input.length; i++){
        const currentNumber = input[i];

        sum += currentNumber;
        invSum += 1 / currentNumber;
        concat += currentNumber;
    }
    console.log(sum);
    console.log(invSum);
    console.log(concat);

}
solve([1,2,3])