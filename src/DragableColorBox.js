import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import transitions from '@material-ui/core/styles/transitions';
const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    padding: '10px',
    bottom: '0px',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease-in-out'
  }
};
function DragableColorBox(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span> {props.name}</span>

        <DeleteForeverOutlinedIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}
export default withStyles(styles)(DragableColorBox);
