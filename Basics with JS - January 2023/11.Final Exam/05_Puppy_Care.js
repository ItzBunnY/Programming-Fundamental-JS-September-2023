function puppycare(input) {
    let remainingFood = Number(input[0]) * 1000;
    let check = '';
  
    for (let i = 1; i < input.length; i++) {
      check = input[i];
  
      if (check === 'Adopted') {
        break;
      }
  
      let eaten = Number(check);
      remainingFood -= eaten;
    }
  
    if (remainingFood >= 0) {
      console.log(`Food is enough! Leftovers: ${remainingFood} grams.`);
    } else {
      console.log(`Food is not enough. You need ${-remainingFood} grams more.`);
    }
  }