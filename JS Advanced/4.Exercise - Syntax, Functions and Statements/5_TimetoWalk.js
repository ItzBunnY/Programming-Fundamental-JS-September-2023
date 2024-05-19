function solve(steps, footprint, speed) {

    let metersWalked = steps * footprint;
    let kmWalked = metersWalked / 1000;
    let timeHour = kmWalked / speed;

    let timeMins = timeHour * 60;
    let totalMins = Math.floor(timeMins);

    let TotalSecs = Math.round((timeMins - totalMins) * 60);
    let brakes = 0;

    for (let i = 1; i < metersWalked / 500; i++) {
        brakes++;
    }

    console.log(`00:${totalMins + brakes}:${TotalSecs}`);


}
solve(4000, 0.6, 5);
