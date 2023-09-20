function equipment(input){

    let price = Number(input[0])
    let kicks = price - price * 0.4
    let uniform = kicks - kicks * 0.2
    let ball = uniform * 0.25
    let junk = ball * 0.2
    let sum = price + kicks + uniform + ball + junk

    console.log(sum)
}
equipment(["365"])