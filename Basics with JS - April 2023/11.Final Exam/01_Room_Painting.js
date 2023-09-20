function roomPainting(input) {
  let paint = Number(input[0]);
  let wallpaper = Number(input[1]);
  let gloves = Number(input[2]);
  let brush = Number(input[3]);

  let glovesPrice = (Math.ceil(wallpaper * 0.35)) * gloves;
  let brushPrice = (Math.floor((paint * 0.48))) * brush;

  let total = ((paint * 21.5) + (wallpaper * 5.2) + ((Math.ceil(wallpaper * 0.35)) * gloves) + ((Math.floor((paint * 0.48))) * brush)) / 15;

  console.log(`This delivery will cost ${total.toFixed(2)} lv.`);
}

roomPainting(["10", "8", "2.2", "5"]);
