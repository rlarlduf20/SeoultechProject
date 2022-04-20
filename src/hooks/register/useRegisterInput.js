import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isEmailSuccess, isEmailFail } from "../../redux/email";

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
  const dispatch = useDispatch();
  const emailSuccess = useSelector((state) => state.email);

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

  const emailClick = async () => {
    const req = await axios
      .post(`http://localhost:8000/auth/send-auth-mail`, {
        email: email,
      })
      .then((res) => res.status)
      .catch((err) => err.status);

    if (req === 200 || req === 204) {
      alert("이메일코드 전송완료");
      dispatch(isEmailSuccess());
    } else if (req === undefined) alert("유효한 이메일을 입력하세요");
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
    dispatch(isEmailFail());
  };
  return { inputs, onChange, onSubmit, emailClick, emailSuccess };
};

export default useInputValue;
