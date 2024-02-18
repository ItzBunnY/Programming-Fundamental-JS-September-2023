function solve(x1,y1,x2,y2){

    let pointA = x2 - x1;
    let pointB = y2 - y1;
    let sum = (pointA * pointA) + (pointB * pointB);
    console.log(Math.sqrt(sum)); 
}
solve(2.34, 15.66, -13.55, -2.9985);