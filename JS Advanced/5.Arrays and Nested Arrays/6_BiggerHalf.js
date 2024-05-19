function solve(input) {

    const sortArr = input.sort((a, b) => a - b);
    const secondHalf = Math.floor(input.length / 2);
    const newArr = input.slice(secondHalf);
    return newArr;
}
solve([3, 19, 14, 7, 2, 19, 6]);