import React, { Component } from 'react';

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades;
  }
  render() {
    return (
      <div>
        <h1>SingleColorPalette</h1>
      </div>
    );
  }
}

export default SingleColorPalette;
