import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
// import { generatePalette } from './colorHelpers';

export class App extends Component {
  findPalette(id) {
    return seedColors.find(function(pallete) {
      return pallete.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Pallete
              Pallete={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Pallete Pallete={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
