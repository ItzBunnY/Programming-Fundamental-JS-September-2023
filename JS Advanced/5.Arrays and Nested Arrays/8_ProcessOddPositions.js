function solve(input) {

    const oddPos = input.filter((_, index) => index % 2 !== 0);
    const doubleNumsArr = oddPos.map(nums => nums * 2);
    const reverseArr = doubleNumsArr.reverse();
    console.log(reverseArr);
}
solve([3, 0, 10, 4, 7, 3]);