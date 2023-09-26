function rightPlace(string, char, match){

    let result = '';

    for(let i = 0; i < string.length; i++){
        if(string[i] == '_'){
            result += char;
        }
        else{
            result += string[i];
        }
    }
    
    if (match == result){
        console.log('Matched');
    }
    else{
        console.log('Not Matched');
    }
}