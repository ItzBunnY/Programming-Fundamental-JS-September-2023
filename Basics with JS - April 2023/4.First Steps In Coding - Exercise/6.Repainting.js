function repainting(input){
     
    let covers = (Number(input[0]) + 2) * 1.50
    let paint = Number(input[1] * 1.1) * 14.50
    let solution = Number(input[2]) * 5
    let hours = Number(input[3])
    let sum =  (covers + paint + solution + 0.40) + (((covers + paint + solution + 0.40) * 0.3) * hours)

    console.log(sum)
}
repainting(["10", "11", "4", "8"])