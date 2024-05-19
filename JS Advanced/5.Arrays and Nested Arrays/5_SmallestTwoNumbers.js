function solve(input) {

    let sortNums = input.sort((a, b) => a - b);
    let removeSmallest = sortNums.splice(2);
    console.log(input);

}
solve([3, 0, 10, 4, 7, 3]);