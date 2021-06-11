let colorSet = [
  '#ffd2d9',
  '#ffe7c9',
  '#f9ffc9',
  '#d3ffd4',
  '#d1ebff',
  '#4ea7b9',
  '#cae43a',
  '#e9d473',
  '#bbbbbb',
  '#aaaaaa',
];

export default function colorGet(colorId) {
  if (!colorSet[colorId]) colorSet = colorSet.concat(colorSet);

  return colorSet[colorId];
}
