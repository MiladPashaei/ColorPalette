import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function generatePalette(starterPalette) {
  let newPalette = {
    newPalette: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)')
      });
    }
  }
  return newPalette;
}
function getRange(hexcolor) {
  const end = '#fff';
  return [
    chroma(hexcolor)
      .darken(1.4)
      .hex(),
    hexcolor,
    end
  ];
}

function getScale(hexcolor, numberOfColors) {
  return chroma
    .scale(getRange(hexcolor))
    .mode('lab')
    .colors(numberOfColors);
}
export { generatePalette };
