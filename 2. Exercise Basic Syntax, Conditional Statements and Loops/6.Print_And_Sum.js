function printsum(num1, num2){

    let sum = 0;
    let numStr = "";

    for(let i = num1; i<=num2; i++){
        numStr += i + " ";
        sum += i;
    }
    console.log(numStr);
    console.log(`Sum: ${sum}`);
}
printsum(5,10);