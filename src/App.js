import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
// import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div>
      <Pallete {...seedColors[4]} />
    </div>
  );
}

export default App;
