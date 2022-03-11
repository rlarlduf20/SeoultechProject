import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid #dcdcdc",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "72px",
        width: "100%",
      }}
    >
      <NavBar />
    </div>
  );
};

export default Header;
