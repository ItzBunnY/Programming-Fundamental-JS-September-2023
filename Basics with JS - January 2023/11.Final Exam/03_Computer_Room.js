function computerRoom(input) {
    let day = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let time = input[3];
    let hourPrice = 0;
    let personPrice = 0;
    let total = 0;
  
    switch (day) {
      case "march":
      case "april":
      case "may":
        switch (time) {
          case "day":
            hourPrice = 10.5;
            break;
          case "night":
            hourPrice = 8.4;
            break;
        }
        break;
  
      case "june":
      case "july":
      case "august":
        switch (time) {
          case "day":
            hourPrice = 12.6;
            break;
          case "night":
            hourPrice = 10.2;
            break;
        }
        break;
    }
  
    if (people >= 4) {
      personPrice = hourPrice - hourPrice * 0.1;
    } else if (hours >= 5) {
      personPrice = hourPrice - hourPrice * 0.5;
    } else {
      personPrice = hourPrice;
    }
    if (people >= 4 && hours >= 5) {
        personPrice = (hourPrice - hourPrice * 0.1) * 0.5;
    }
  
    total = personPrice * people * hours;
  
    console.log(`Price per person for one hour: ${personPrice.toFixed(2)}`);
    console.log(`Total cost of the visit: ${total.toFixed(2)}`);
  }
  