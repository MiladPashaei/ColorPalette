import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
// import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div>
      <Pallete Pallete={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
