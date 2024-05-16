function solve(num) {

    let numStr = num.toString();
    let sum = 0;
    let state = true;
    for (let i = 0; i < numStr.length; i++) {

        sum += Number(numStr[i]);

        if (numStr[0] != numStr[i]) {
            state = false;
            continue;
        }
    }
    console.log(state);
    console.log(sum);
}
solve(1234);