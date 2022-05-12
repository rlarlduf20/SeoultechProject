import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Mark from "../../../image/seoultechMark.jpeg";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar";
import useAuth from "../../../hooks/useAuth";

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
    width: 2.1875rem;
    height: 2.1875rem;
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
const MyPageLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
// const StyledAvatar = styled(Avatar)`
//   position: absolute;
//   right: 0;
//   width: 2000px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// const settings = ["My Page", "Logout"];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const { isLogin, onClickSignout } = useAuth();

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      {isLogin ? (
        <StyledNav>
          <StyledLink to="/user">
            <img src={Mark} alt="마크" />
            <p className="home_button">
              환경서비스
              <br /> 플랫폼
            </p>
          </StyledLink>

          <StyledLink to="/data" style={{ position: "absolute", right: 250 }}>
            <p className="data_button">Data</p>
          </StyledLink>

          <div style={{ position: "absolute", right: 0 }}>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar src="/broken-image.jpg" />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MyPageLink to="/user/my">
                          <MenuItem onClick={handleClose}>마이페이지</MenuItem>
                        </MyPageLink>
                        <MenuItem onClick={onClickSignout}>로그아웃</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </StyledNav>
      ) : (
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
      )}
    </>
  );
};

export default NavBar;
