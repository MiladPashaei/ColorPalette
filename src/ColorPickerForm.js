import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
  colorPicker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  btn: {
    width: "100%",
    padding: "1rem",
    marginTop: "2rem",
    fontSize: "2rem"
  },
  colorName: {
    width: "100%",
    height: "70px"
  }
};

export class ColorPickerForm extends Component {
  state = { newColorName: "", currentColor: "teal" };
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };
  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  };

  render() {
    const { colors, maxColors, classes } = this.props;
    return (
      <div>
        <ChromePicker
          className={classes.colorPicker}
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            placeholder="Color Name"
            className={classes.colorName}
            value={this.state.newColorName}
            margin="normal"
            name="newColorName"
            onChange={this.handleChange}
            variant="filled"
            validators={["required", "isColorUnique", "isColorNameUnique"]}
            errorMessages={[
              "this field is required",
              "Color Already Used!",
              "Color must be unique ! "
            ]}
          />
          <Button
            className={classes.btn}
            variant="contained"
            type="submit"
            color="primary"
            disabled={colors.length >= maxColors}
            style={{
              backgroundColor:
                colors.length >= maxColors ? "grey" : this.state.currentColor
            }}
          >
            {colors.length >= maxColors ? "Palette Full" : "   ADD COLOR"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
