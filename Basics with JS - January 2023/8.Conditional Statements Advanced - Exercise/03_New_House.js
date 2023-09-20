function house(input){

    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let total = 0;

    switch(flower){
        case "Roses":
            if (count > 80){
                total = (count * 5) - ((count * 5) * 0.1);
            }
            else{
                total = count * 5;
            }
            break;
        case "Dahlias":
            if (count > 90){
                total = (count * 3.8) - ((count * 3.8) * 0.15);
            }
            else{
                total = count * 3.8;
            }
            break;
        case "Tulips":
                if (count > 80){
                    total = (count * 2.8) - ((count * 2.8) * 0.15);
                }
                else{
                    total = count * 2.8;
                }
                break;
        case "Narcissus":
                if (count < 120){
                    total = (count * 3) * 1.15;
                }
                else{
                    total = count * 3;
                }
                break;
        case "Gladiolus":
                    if (count < 80){
                        total = (count * 2.5) * 1.2;
                    }
                    else{
                        total = count * 2.5;
                    }
                    break;
    }
    if(budget >= total){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - total).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
}