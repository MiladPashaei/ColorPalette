import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/paletteFooterStyle';

function PaletteFooter(props) {
  const { newPalette, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      {newPalette}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
