function englishName(num){

    let lastDigit = num % 10;
    let lastDigitSting = '';


    switch (lastDigit){
        case 0:
            lastDigitSting = 'zero';
            break;
        case 1:
            lastDigitSting = 'one';
            break;
        case 2:
            lastDigitSting = 'two';
            break;
        case 3:
            lastDigitSting = 'three';
            break;
        case 4:
            lastDigitSting = 'four';
            break;
        case 5:
            lastDigitSting = 'five';
            break;
        case 6:
            lastDigitSting = 'six';
            break;
        case 7:
            lastDigitSting = 'seven';
            break;
        case 8:
            lastDigitSting = 'eight';
            break;
        case 9:
            lastDigitSting = 'nine';
            break;
    }
    console.log(lastDigitSting);
}
englishName(512);