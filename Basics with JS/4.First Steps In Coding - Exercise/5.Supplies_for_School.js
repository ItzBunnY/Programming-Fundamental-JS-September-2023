function supplies(input){

    let pen = Number(input[0]) * 5.80
    let mark = Number(input[1]) * 7.20
    let cleaner = Number(input[2]) * 1.20
    let disscount = Number(input[3]) * 0.01
    let sum = (pen + mark + cleaner) - (pen + mark + cleaner)* disscount

    console.log(sum)
}
supplies(["2 ", "3 ", "4 ", "25 "])