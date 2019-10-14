import React, { Component } from 'react';
import './colorBox.css';

export class ColorBox extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className='colorBox'>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default ColorBox;
