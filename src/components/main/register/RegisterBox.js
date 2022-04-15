import React from "react";
import MyButton from "../../public/common/MyButton";
import MyInput from "../../public/common/MyInput";
import styled from "styled-components";
import useInputValue from "../../../hooks/useInputValue";

const StyledForm = styled.form`
  width: 54.6875rem;
  padding: 6.25rem;
  height: 43.75rem;
  background: white;
  border: 0.0625rem solid #dcdcdc;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.625rem;
  .email {
    grid-column: 1/3;
  }
  .email_button {
    grid-column: 3/4;
    height: 3.4375rem;
    width: 6.875rem;
  }
  .password {
    grid-row: 2;
    grid-column: 1/3;
  }
  .confirmPassword {
    grid-row: 2;
    grid-column: 3/5;
  }
  .last_name {
    grid-row: 3;
    grid-column: 1/3;
  }
  .first_name {
    grid-row: 3;
    grid-column: 3/5;
  }
  .phone {
    grid-row: 4;
    grid-column: 1/3;
  }
  .radiobox {
    grid-row: 4;
    grid-column: 3;
  }
  .city {
    grid-row: 5;
    grid-column: 1/3;
  }
  .address {
    grid-row: 5;
    grid-column: 3/5;
  }
  .submit_button {
    grid-row: 6;
    grid-column: 2/4;
  }
`;
const StyledRadioBox = styled.div`
  .male {
    display: inline-block;
  }
  .female {
    display: inline-block;
  }
`;
const StyledLabel = styled.label`
  display: block;
  width: 15px;
  height: 25px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  color: green;
  border: 0.125rem solid green;
  cursor: pointer;
`;
const StyledRadio = styled.input`
  display: none;
  &:checked + ${StyledLabel} {
    color: white;
    background: #8fbc8f;
    border: 0.125rem solid white;
  }
`;

const RegisterBox = () => {
  const { inputs, onChange, onSubmit } = useInputValue();
  const {
    email,
    password,
    confirmPassword,
    last_name,
    first_name,
    phone,
    //gender,
    city,
    address,
  } = inputs;

  return (
    <StyledForm onSubmit={onSubmit}>
      <MyInput
        label="이메일 *"
        type="email"
        name="email"
        onChange={onChange}
        className="email"
        value={email}
      />
      <MyButton className="email_button">이메일 발송</MyButton>
      <MyInput
        label="비밀번호 *"
        onChange={onChange}
        className="password"
        value={password}
        type="password"
        name="password"
      />
      <MyInput
        label="비밀번호 확인 *"
        onChange={onChange}
        className="confirmPassword"
        value={confirmPassword}
        type="password"
        name="confirmPassword"
      />
      <MyInput
        label="성 *"
        onChange={onChange}
        className="last_name"
        value={last_name}
        name="last_name"
      />
      <MyInput
        label="이름 *"
        onChange={onChange}
        className="first_name"
        value={first_name}
        name="first_name"
      />
      <MyInput
        label="전화번호 *"
        onChange={onChange}
        className="phone"
        value={phone}
        name="phone"
      />
      <StyledRadioBox className="radiobox">
        <div className="male">
          <StyledRadio
            type="radio"
            id="gender_male"
            name="gender"
            value="male"
            onChange={onChange}
          />
          <StyledLabel htmlFor="gender_male">남</StyledLabel>
        </div>
        <div className="female">
          <StyledRadio
            type="radio"
            id="gender_female"
            name="gender"
            value="female"
            onChange={onChange}
          />
          <StyledLabel htmlFor="gender_female">여</StyledLabel>
        </div>
      </StyledRadioBox>
      <MyInput
        label="거주도시 *"
        onChange={onChange}
        className="city"
        value={city}
        name="city"
      />
      <MyInput
        label="주소 *"
        onChange={onChange}
        className="address"
        value={address}
        name="address"
      />
      <MyButton onSubmit={onSubmit} className="submit_button" type="submit">
        등록하기
      </MyButton>
    </StyledForm>
  );
};

export default RegisterBox;
