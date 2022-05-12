import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core";

const StyledTextField = styled(TextField)({
  "&:focus": {
    borderColor: "green",
  },
});

const MyInput = ({
  label,
  onChange,
  name,
  type,
  className,
  value,
  disabled,
}) => {
  return (
    <StyledTextField
      variant="outlined"
      label={label}
      onChange={onChange}
      type={type}
      name={name}
      className={className}
      value={value}
      disabled={disabled}
    />
  );
};

MyInput.propTypes = {};

export default MyInput;
