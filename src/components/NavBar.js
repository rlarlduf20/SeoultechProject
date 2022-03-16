import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Mark from "../image/seoultechMark.jpeg";

const StyledNav = styled.nav`
  width: 78.125rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;
const StyledButtonGroup = styled(ButtonGroup)`
  position: absolute;
  right: 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  img {
    width: 1.5625rem;
    height: 1.5625rem;
    display: inline-block;
    margin-right: 0.3125rem;
  }
  .home_button {
    display: inline-block;
    font-weight: bold;
    font-size: 1.1875rem;
  }
  .data_button {
    font-size: 1.1875rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <StyledLink to="/user">
        <img src={Mark} alt="마크" />
        <p className="home_button">
          환경서비스
          <br />
          플랫폼
        </p>
      </StyledLink>

      <StyledLink to="/data" style={{ position: "absolute", right: 250 }}>
        <p className="data_button">Data</p>
      </StyledLink>

      <StyledButtonGroup
        variant="text"
        aria-label="text button group"
        className="button_group"
      >
        <Button style={{ fontSize: "0.75rem" }}>
          <StyledLink to="/user/login">로그인</StyledLink>
        </Button>
        <Button style={{ fontSize: "0.75rem" }}>
          <StyledLink to="/user/registration">회원가입</StyledLink>
        </Button>
      </StyledButtonGroup>
    </StyledNav>
  );
};

export default NavBar;
