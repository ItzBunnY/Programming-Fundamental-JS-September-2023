function takeaway(input){

    let chicken = Number(input[0]) * 10.35
    let fish = Number(input[1]) * 12.40
    let veggie = Number(input[2]) * 8.15
    let sum = (chicken + fish + veggie) + (chicken + fish + veggie) * 0.2 + 2.50

    console.log(sum)
}
takeaway(["2", "4", "3"])