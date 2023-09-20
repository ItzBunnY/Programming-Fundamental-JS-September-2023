function goldmine(input) {

    let index = 0;
    let locations = Number(input[index++]);

    for (let i = 0; i < locations; i++){

        let expectedAvrgYield = Number(input[index++]);
        let days = Number(input[index++]);
        let yield = 0;

        for (let g = 0; g < days; g++) {
            let presentYield = Number(input[index++]);
            yield += presentYield;
        }
        let locationAvrg = (yield / days);
        let diff = Math.abs(locationAvrg - expectedAvrgYield);

        if (locationAvrg < expectedAvrgYield) {

            console.log(`You need ${diff.toFixed(2)} gold.`);
        } 
        else {
            console.log(`Good job! Average gold per day: ${locationAvrg.toFixed(2)}.`);
        }
    }
}