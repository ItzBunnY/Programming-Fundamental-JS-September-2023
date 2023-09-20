function cinema(input){

    let ticket = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);
    let total = 0;

    if(ticket == "Premiere"){
        total = (row * col) * 12;
    }
    else if(ticket == "Normal"){
        total = (row * col) * 7.5;
    }
    else if(ticket == "Discount"){
        total = (row * col) * 5;
    }
    console.log(`${total.toFixed(2)} leva`);
}