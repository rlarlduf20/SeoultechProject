import React from "react";
import styled from "styled-components";

const StyledRegisterMainBox = styled.div`
  margin-top: 5.9375rem;
`;
const StyledRegisterText = styled.div`
  height: 12.5rem;
  text-align: center;
  & h1 {
    display: block;
    padding: 2rem;
    font-size: 2.25rem;
    font-weight: bold;
  }
  & p {
    display: block;
    padding: 1rem;
    line-height: 1.875rem;
  }
`;
const StyledRegisterBox = styled.div`
  width: 54.6875rem;
  padding: 6.25rem;
  height: 36.25rem;
  background: white;
  border: 0.0625rem solid #dcdcdc;
  & label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
  & input {
    width: 24rem;
    padding: 1rem 0 1rem 1rem;
    border: 0.0625rem solid #e0dfdf;
  }
  & .email_input {
    margin-bottom: 2.25rem;
    & button {
      border: 0.125rem solid green;
      color: green;
      padding: 0.8125rem;
      margin-left: 0.75rem;
      background: white;
      font-weight: bold;
      &:hover {
        color: white;
        cursor: pointer;
        background: #8fbc8f;
        border: 0.125rem solid white;
      }
    }
  }
  & .pw_input {
    margin-bottom: 36px;
    & .pw_input2 {
      display: inline-block;
      margin-right: 4.375rem;
    }
    & .pw_input_confirm {
      display: inline-block;
    }
  }
  & .name_input {
    margin-bottom: 36px;
    & .lastname_input {
      display: inline-block;
      margin-right: 4.375rem;
    }
    & .firstname_input {
      display: inline-block;
    }
  }
  & .phone_input {
    margin-bottom: 36px;
    & .phone_input2 {
      display: inline-block;
      margin-right: 0.75rem;
    }
    & .male {
      display: inline-block;
    }
    & .female {
      display: inline-block;
    }
  }
  & .home_input {
    & .city_input {
      display: inline-block;
      margin-right: 70px;
    }
    & .adress_input {
      display: inline-block;
    }
  }
`;
const StyledLabel = styled.label`
  display: block;
  padding: 0.75rem 1rem 0.75rem 1rem;
  color: green;
  border: 0.125rem solid green;
`;
const StyledRadio = styled.input`
  display: none;
  &:checked + ${StyledLabel} {
    color: white;
    background: #8fbc8f;
    border: 0.125rem solid white;
  }
`;

const RegisterMain = () => {
  return (
    <main>
      <StyledRegisterMainBox>
        <StyledRegisterText>
          <h1>신규사용자 등록</h1>
          <p>
            * 표시는 필수 입력사항입니다.
            <br />
            이메일인증절차가 있습니다. 유효한 이메일을 사용해주세요.
          </p>
        </StyledRegisterText>
        <div
          style={{
            background: "#f2f2f2",
            height: "950px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledRegisterBox>
            <div className="email_input">
              <label for="email">이메일</label>
              <input placeholder="이메일 *" id="email" />
              <button>인증메일 발송</button>
            </div>

            <div className="pw_input">
              <div className="pw_input2">
                <label for="pw">비밀번호</label>
                <input placeholder="비밀번호 *" id="pw" />
              </div>
              <div className="pw_input_confirm">
                <label for="pw_confirm">비밀번호 확인</label>
                <input placeholder="비밀번호 확인 *" id="pw_confirm" />
              </div>
            </div>

            <div className="name_input">
              <div className="lastname_input">
                <label for="lastname">성</label>
                <input placeholder="성 *" id="lastname" />
              </div>
              <div className="firstname_input">
                <label for="firstname">이름</label>
                <input placeholder="이름 *" id="firstname" />
              </div>
            </div>

            <div className="phone_input">
              <div className="phone_input2">
                <label for="phone">전화번호</label>
                <input placeholder="전화번호 *" id="phone" />
              </div>
              <div className="male">
                <StyledRadio type="radio" id="gender_male" name="gender" />
                <StyledLabel for="gender_male">남</StyledLabel>
              </div>
              <div className="female">
                <StyledRadio type="radio" id="gender_female" name="gender" />
                <StyledLabel for="gender_female">여</StyledLabel>
              </div>
            </div>

            <div className="home_input">
              <div className="city_input">
                <label for="city">거주도시</label>
                <input placeholder="거주도시 *" id="city" />
              </div>
              <div className="adress_input">
                <label for="adress">주소</label>
                <input placeholder="주소 *" id="adress" />
              </div>
            </div>
          </StyledRegisterBox>
        </div>
      </StyledRegisterMainBox>
    </main>
  );
};

export default RegisterMain;
