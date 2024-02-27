function solve(num){

    let let1 = String.fromCharCode(97 + 0);
    let let2 = String.fromCharCode(97 + 0);
    let let3 = String.fromCharCode(97 + 0);

    for(let i = 0; i < num; i ++){

        let1 = String.fromCharCode(97 + i);

        for(let j = 0; j < num; j++){

            let2 = String.fromCharCode(97 + j);

            for(let k = 0; k < num; k++){

                let3 = String.fromCharCode(97 + k);
                console.log(`${let1}${let2}${let3}`);

            }
        }
    }
}
solve(3)