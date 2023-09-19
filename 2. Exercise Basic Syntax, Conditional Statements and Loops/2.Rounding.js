function rounding(num, pres){
    if (pres > 15){
        pres = 15;
    }
    let fixednum = num.toFixed(pres);
    console.log(parseFloat(fixednum)); 
}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);