import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
    const { colors, maxColors } = this.props;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={this.state.newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorUnique", "isColorNameUnique"]}
            errorMessages={[
              "this field is required",
              "Color Already Used!",
              "Color must be unique ! "
            ]}
          />
          <Button
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

export default ColorPickerForm;
