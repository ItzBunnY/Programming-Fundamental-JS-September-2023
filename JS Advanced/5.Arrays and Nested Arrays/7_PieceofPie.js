function solve(arr, pie1, pie2) {

    let firstPie = arr.indexOf(pie1);
    let lastPie = arr.indexOf(pie2);
    const newArr = arr.slice(firstPie, lastPie + 1);

    return newArr;
}
solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');