function area(input){

    let shape = input[0];
    let area = 0;

    if (shape == "square"){

        let num1 = Number(input[1]);
        area = num1 * num1;

    }
    else if (shape == "rectangle"){

        let num2 = Number(input[1]);
        let num3 = Number(input[2]);
        area = num2 * num3;

    }
    else if (shape == "circle"){

        let num4 = Number(input[1]);
        area = Math.PI * (num4 * num4);

    }  
    else if (shape == "triangle"){

        let num5 = Number(input[1]);
        let num6 = Number(input[2]);
        area = (num5 * num6) / 2;

    }

    console.log(area.toFixed(3));
}
area(["rectangle", "7", "2.5"]);