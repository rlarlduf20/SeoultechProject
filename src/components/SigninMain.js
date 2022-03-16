import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSigninBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5.9375rem;
  width: 31.25rem;
  height: 34.375rem;

  & .signin_text {
    display: block;
    padding-top: 7.3125rem;
    font-weight: bold;
    font-size: 2.75rem;
    margin-bottom: 3rem;
  }
  & .input_email {
    display: block;
    width: 75%;
    padding: 1.5rem 0 1.5rem 1.75rem;
    margin-bottom: 1.25rem;
  }
  & .input_pw {
    display: block;
    width: 75%;
    padding: 1.5rem 0 1.5rem 1.75rem;
    margin-bottom: 1.25rem;
  }
  & .signin_button {
    border: 0.125rem solid green;
    // border-radius: 3.125rem;
    color: green;
    background: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 1.5rem 0.875rem 1.5rem 0.875rem;
    width: 81%;
  }
  & .signin_button:hover {
    color: white;
    cursor: pointer;
    background: #8fbc8f;
    border: 0.125rem solid white;
  }
  & .to_registration {
    margin-top: 1rem;
  }
`;

const SignInMain = () => {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <StyledSigninBox>
        <p className="signin_text">로그인</p>
        <input placeholder="이메일" className="input_email" />
        <input placeholder="비밀번호" className="input_pw" />
        <button className="signin_button">로그인</button>
        <p className="to_registration">
          처음 방문하셨나요?{" "}
          <Link to="/user/registration" style={{ color: "green" }}>
            신규등록
          </Link>
        </p>
      </StyledSigninBox>
      ;
    </main>
  );
};

export default SignInMain;
