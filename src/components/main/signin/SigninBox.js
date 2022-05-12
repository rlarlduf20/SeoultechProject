import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import useSigninInput from "../../../hooks/signin/useSigninInput";
import MyInput from "../../public/common/MyInput";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StyledSigninBox = styled.form`
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
    width: 75%;
    margin-bottom: 1.5rem;
  }
  & .input_pw {
    width: 75%;
    margin-bottom: 1.5rem;
  }
  & .signin_button {
    border: 0.125rem solid green;
    color: green;
    background: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 1.5rem 0.875rem 1.5rem 0.875rem;
    width: 75%;
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

const SigninBox = () => {
  const { inputs, onChange, onSubmit } = useSigninInput();
  const { email, password } = inputs;
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/user");
    }
  }, [isLogin]);
  return (
    <StyledSigninBox onSubmit={onSubmit}>
      <p className="signin_text">로그인</p>
      <MyInput
        label="이메일"
        className="input_email"
        type="email"
        onChange={onChange}
        name="email"
        value={email}
      />
      <MyInput
        label="비밀번호"
        className="input_pw"
        type="password"
        onChange={onChange}
        name="password"
        value={password}
      />
      <button className="signin_button">로그인</button>

      <p className="to_registration">
        처음 방문하셨나요?{" "}
        <Link to="/user/registration" style={{ color: "green" }}>
          신규등록
        </Link>
      </p>
    </StyledSigninBox>
  );
};

export default SigninBox;
