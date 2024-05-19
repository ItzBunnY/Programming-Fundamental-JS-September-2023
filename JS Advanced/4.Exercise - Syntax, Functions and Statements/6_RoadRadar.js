function solve(speed, area) {

    let exceedSpeed = 0;
    let speedLimit = 0;
    let status = '';
    speed = Number(speed);

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    exceedSpeed = speed - speedLimit;

    if (speed < speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else if (speed > speedLimit && speed <= speedLimit + 20) {
        status = "speeding"
    }
    else if (speed > speedLimit + 20 && speed <= speedLimit + 40) {
        status = "excessive speeding"
    }
    else {
        status = "reckless driving"
    }

    if (speed > speedLimit) {
        console.log(`The speed is ${exceedSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
solve("21", "residential")