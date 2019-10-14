import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';

export class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className='palette'>
        {/* navbaris here */}
        <div className='palette-colors'>{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Pallete;
