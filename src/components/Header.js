import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5.875rem",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        zIndex: 200,
        borderBottom: "1px solid #dcdcdc",
      }}
    >
      <NavBar />
    </div>
  );
};

export default Header;
