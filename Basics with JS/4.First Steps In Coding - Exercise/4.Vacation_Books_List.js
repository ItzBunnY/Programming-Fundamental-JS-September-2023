function nerd(input){

    let pages = Number(input[0]);
    let pageshour = Number(input[1]);
    let days = Number(input[2]);
    let hourtonerd = (pages / pageshour) / days;

    console.log(hourtonerd);
}
nerd(["212", "20", "2"])