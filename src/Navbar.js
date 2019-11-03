import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './Styles/NavbarStyle';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnakebar = this.closeSnakebar.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnakebar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showAllColors, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>ReactColorPicker</Link>
        </div>
        {showAllColors && (
          <div>
            <span>Level : {level}</span>

            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.Select}>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #ffff </MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255) </MenuItem>,
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          message={<span id='message-id'>Format Changed!</span>}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={this.closeSnakebar}
          action={[
            <IconButton
              onClick={this.closeSnakebar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
