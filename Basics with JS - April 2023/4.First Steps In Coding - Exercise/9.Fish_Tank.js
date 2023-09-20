function fishtank(input){

    let lenght = Number(input[0])
    let width = Number(input[1])
    let hight = Number(input[2])
    let percent = Number(input[3]) * 0.01
    let sum = ((lenght * width * hight) * 0.001) * (1 - percent)

    console.log(sum)
}
fishtank(["85", "75", "47", "17"])