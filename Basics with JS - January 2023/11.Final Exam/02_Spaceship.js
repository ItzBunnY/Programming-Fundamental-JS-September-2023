function spaceship(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let avrgPersonHeight = Number(input[3]);

    let volumeShip = width * length * height;
    let volumeRoom = (avrgPersonHeight + 0.4) * 2 * 2;
    let people = Math.floor(volumeShip / volumeRoom);

    if (people >= 3 && people <= 10) {
        console.log(`The spacecraft holds ${people} astronauts.`);
    }
    else if (people < 3) {
        console.log("The spacecraft is too small.");
    }
    else if (people > 10) {
        console.log("The spacecraft is too big.");
    }
}