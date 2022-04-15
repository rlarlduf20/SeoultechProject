import React from "react";
// import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 0.125rem solid green;
  border-color: green;
  color: green;
  background: white;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    color: white;
    background: #8fbc8f;
    border: 0.125rem solid white;
    cursor: pointer;
  },
`;

const MyButton = ({ children, className, onSubmit, type, onClick }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default MyButton;
