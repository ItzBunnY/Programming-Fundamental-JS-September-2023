function solve(num, cmd1, cmd2, cmd3, cmd4, cmd5) {

    let cmd;
    num = Number(num);

    for (let i = 0; i < 5; i++) {

        if (i == 0) {
            cmd = cmd1;
        }
        else if (i == 1) {
            cmd = cmd2;
        }
        else if (i == 2) {
            cmd = cmd3;
        }
        else if (i == 3) {
            cmd = cmd4;
        }
        else if (i == 4) {
            cmd = cmd5;
        }

        switch (cmd) {
            case "chop":
                num = num / 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num = num + 1;
                console.log(num);
                break;
            case "bake":
                num = num * 3;
                console.log(num);
                break;
            case "fillet":
                num = num * 0.8;
                console.log(num);
                break;
        }
    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')