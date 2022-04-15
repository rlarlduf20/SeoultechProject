import { useState } from "react";

const useInputValue = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    last_name: "",
    first_name: "",
    phone: "",
    gender: "",
    city: "",
    address: "",
  });

  const {
    email,
    password,
    confirmPassword,
    last_name,
    first_name,
    phone,
    gender,
    city,
    address,
  } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호가 서로 다릅니다.");
    }
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !last_name ||
      !first_name ||
      !phone ||
      !city ||
      !address ||
      !gender
    ) {
      return alert("*표시 항목을 입력해주세요.");
    }
    let body = {
      email,
      password,
      last_name,
      first_name,
      phone,
      city,
      address,
      gender,
    };
    console.log(body);
    alert("등록 완료");
  };
  return { inputs, onChange, onSubmit };
};

export default useInputValue;
