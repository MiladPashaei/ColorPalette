import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
// import { generatePalette } from './colorHelpers';

function App() {
  return (
   <Switch> <Route exact path="/" render={()=>} />
   <Route exact path = " /palette/:id"/></Switch>
    // <div>
    //   <Pallete Pallete={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
