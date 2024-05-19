function solve(input) {

    let firstElem = input.shift();
    let lastElem = input.pop();

    console.log(Number(firstElem) + Number(lastElem));
}
solve(['20', '30', '40']);