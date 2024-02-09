function ForeignLanguages(lang){
    switch(lang){
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Mexico":
        case "Spain":
        case "Argentina":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
    }
}