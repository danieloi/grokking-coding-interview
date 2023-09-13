type RED = 0;
type WHITE = 1;
type BLUE = 2;

type ColorsArray = Array<RED | WHITE | BLUE>;

const testInput: ColorsArray = [2, 1, 1, 0, 0];

function sortColors(colors: number[]) {
  // Replace this placeholder return statement with your code
  let redIndex = 0,
    whiteIndex = 0;
  let blueIndex = colors.length - 1;

  while (whiteIndex <= blueIndex) {
    if (colors[whiteIndex] === 0) {
      [colors[whiteIndex], colors[redIndex]] = [
        colors[redIndex],
        colors[whiteIndex],
      ];
      whiteIndex += 1;
      redIndex += 1;
    } else if (colors[whiteIndex] === 1) {
      whiteIndex += 1;
    } else {
      [colors[whiteIndex], colors[blueIndex]] = [
        colors[blueIndex],
        colors[whiteIndex],
      ];
      blueIndex -= 1;
    }
  }
  return colors;
}

export { sortColors };
