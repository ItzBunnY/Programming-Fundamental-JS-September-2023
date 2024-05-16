function solve(num1, num2) {

    let devisor = num1 % num2;

    while (devisor !== 0) {
        num1 = num2;
        num2 = devisor;
        devisor = num1 % num2;
    }
    console.log(num2);
}
solve(15, 5);