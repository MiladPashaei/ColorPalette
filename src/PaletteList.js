import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
export class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    console.log(palettes.map(palette => <h1> {palette.paletteName}</h1>));
    return (
      <div>
        <MiniPalette />
        <h1>React colors</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
