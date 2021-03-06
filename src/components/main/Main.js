import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MainImage from "../../image/envl.png";
import SubImage1 from "../../image/envp.png";
import SubImage2 from "../../image/s.jpg";
import { Link } from "react-router-dom";

const StyledMainBox = styled.main`
  position: relative;
  margin-top: 5.9375rem;
  background: #f2f2f2;
  height: 95.625rem;
  & .main_image {
    width: 100%;
    height: 31.25rem;
    opacity: 0.85;
    overflow: hidden;
  }
`;
const StyledInnerBox = styled.div`
  position: relative;
  width: 78.125rem;
  margin: 0 auto;
  background: white;
  padding: 3.125rem 0 3.125rem 0;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 1.5625rem;
    font-weight: bold;
    margin-right: 1.875rem;
  }
  & .sub_image1 {
  }
  & .sub_image2 {
    margin-top: 6.25rem;
  }
`;

const appearText = keyframes`
  0% {
    margin-top: 1.25rem;
    opacity: 0;
  }
  100% {
    opacity: 1;

  }
`;
const appearButton = keyframes`
  0% {
    margin-right: 1.25rem;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StyledMainText = styled.div`
  position: absolute;
  top: 6.5625rem;
  right: 31.25rem;
  & .maintext {
    font-size: 1.75rem;
    text-align: right;
    line-height: 2.5rem;
    letter-spacing: 2px;
    animation: ${appearText} 1.5s;
  }
  & button {
    animation: ${appearButton} 1.5s;
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
    border: 0.125rem solid green;
    border-radius: 3.125rem;
    margin-top: 0.9375rem;
  }
  & button:hover {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
    border: 0.125rem solid white;
    background: #8fbc8f;
    border-radius: 3.125rem;
    margin-top: 0.9375rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: green;
  &:hover {
    color: white;
  }
`;

const Main = () => {
  const [isTextLoading, setTextIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  useEffect(() => {
    let textTimer = setTimeout(() => setTextIsLoading(true), 500);
    return () => {
      clearTimeout(textTimer);
    };
  }, []);
  useEffect(() => {
    let buttonTimer = setTimeout(() => setIsButtonLoading(true), 1500);
    return () => {
      clearTimeout(buttonTimer);
    };
  }, []);
  return (
    <StyledMainBox>
      <img className="main_image" src={MainImage} alt="???????????????" />
      <StyledMainText>
        {isTextLoading ? (
          <p className="maintext">
            ??? ?????? ?????? ????????? ????????? <br />
            ?????????????????? ???????????????
            <br /> ?????? ????????? ????????? ?????????????????? ????????????.
            <br />
            <p style={{ fontSize: "1.25rem" }}>-Mahatma Gandhi</p>
          </p>
        ) : null}
        {isButtonLoading ? (
          <button>
            <StyledLink to="/data">
              ?????? ?????? ???????????? ?????????????????? ??????????????????.
            </StyledLink>
          </button>
        ) : null}
      </StyledMainText>

      <StyledInnerBox>
        <p>
          Environment Technology
          <br /> Sesearch Institute
          <br /> Seoultech University
        </p>
        <img className="sub_image1" src={SubImage1} alt="???????????????1" />
        <img className="sub_image2" src={SubImage2} alt="???????????????2" />
      </StyledInnerBox>
    </StyledMainBox>
  );
};

export default Main;
