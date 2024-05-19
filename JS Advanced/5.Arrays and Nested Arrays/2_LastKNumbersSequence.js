function solve(num1, num2) {

    let result = [1];

    for (let i = 1; i < num1; i++) {
        let sum = 0;
        for (let j = i - num2; j < i; j++) {
            if (j >= 0) {
                sum += result[j];
            }
        }
        result.push(sum);
    }
    return result;
}
