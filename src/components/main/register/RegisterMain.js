import React from "react";
import RegisterText from "./RegisterText";
import RegisterBox from "./RegisterBox";

const RegisterMain = () => {
  return (
    <main style={{ marginTop: "5.9375rem" }}>
      <RegisterText />
      <div
        style={{
          background: "#f2f2f2",
          height: "950px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegisterBox />
      </div>
    </main>
  );
};

export default RegisterMain;
