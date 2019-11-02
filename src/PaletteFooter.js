import React from 'react';

export default function PaletteFooter(props) {
  const { newPalette, emoji } = props;
  return (
    <footer className='palette-footer'>
      {newPalette}
      <span className='emoji'>{emoji}</span>
    </footer>
  );
}
