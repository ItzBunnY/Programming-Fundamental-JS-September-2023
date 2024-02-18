function solve(input){

    let reversedString = '';

    for (let i = input.length - 1; i >= 0; i--){
        reversedString += input[i];
    }
    console.log(reversedString);
}
solve("Hello")