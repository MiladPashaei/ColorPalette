import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export class PaletteMetaForm extends Component {
  state = {
    stage: "form",
    newPaletteName: ""
  };
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  changeToEmoji = () => {
    this.setState({ stage: "emoji" });
  };
  savePalette = emoji => {
    this.props.handleSubmit({
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    });
  };
  render() {
    const { newPaletteName } = this.state;
    return (
      <div>
        <Dialog
          open={this.state.stage === "emoji"}
          onClose={this.props.canselForm}
        >
          <DialogTitle id="form-dialog-title">Choose Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} title="Pick a Palette emoji" />
        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          onClose={this.props.canselForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>

          <ValidatorForm onSubmit={this.changeToEmoji}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette , make sure it's unique
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={this.state.newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name Already Taken"]}
                fullWidth
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.canselForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
