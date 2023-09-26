function echoType(input){

    if(typeof(input) == 'number' || typeof(input) == 'string'){
        console.log(typeof(input));
        console.log(input)

    }
    else{
        console.log(typeof(input));
        console.log('Parameter is not suitable for printing');
    }
}
echoType(18);