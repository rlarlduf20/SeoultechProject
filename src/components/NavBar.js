import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  width: 1250px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
`;
const StyledLi = styled.li`
  display: inline-block;
  font-size: 24px;
  &:hover {
    color: green;
  }
  & + & {
    margin-left: 100px;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <ul>
        <StyledLi>
          <Link to="/user">Home</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/data">Data</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/user/login">로그인</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/user/registration">회원가입</Link>
        </StyledLi>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
