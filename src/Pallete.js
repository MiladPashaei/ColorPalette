import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

import Styles from './Styles/palleteStyle';
// const Styles = {
//   palette: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   colors: {
//     height: '90%'
//   }
// };

export class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, newPalette, emoji, id } = this.props.Pallete;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showFullPalette={true}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColors
        />

        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter newPalette={newPalette} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(Styles)(Pallete);
