function solve(num){

    let let1 = String.fromCharCode(97 + 0);
    let let2 = String.fromCharCode(97 + 0);
    let let3 = String.fromCharCode(97 + 0);

    for(let i = 0; i < num; i ++){

        let3 = String.fromCharCode(97 + i);
        if(i == num){
            for(let i = 0; i < num; i ++){
                let2 = String.fromCharCode(97 + i);
            }
        }

        console.log(let1, let2, let3);
    }
}
solve(3)