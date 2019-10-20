import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React colors</h1>
        {palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}>{palettes.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
