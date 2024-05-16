function solve(fruit, weight, price){

    let kgWeight = (weight / 1000);
    let kgPrice = kgWeight * price;

    console.log(`I need $${kgPrice.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${fruit}.`);
}
