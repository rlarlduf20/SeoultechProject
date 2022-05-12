import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isEmailSuccess, isEmailFail } from "../../redux/email";
import { codeSuccess } from "../../redux/code";
import { registerUserAsync } from "../../redux/user";

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
    code: "",
  });
  const checkCode = useSelector((state) => state.code);
  const dispatch = useDispatch();
  const emailSuccess = useSelector((state) => state.email);
  const [operate, setOperate] = useState(false);
  const [token, setToken] = useState("");
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
    code,
  } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const emailClick = async () => {
    setOperate(true);
    const req = await axios
      .post(`http://localhost:8000/auth/send-auth-mail`, {
        email: email,
      })
      .then((res) => res.status)
      .catch((err) => err.status);

    if (req === 200 || req === 204) {
      alert("이메일코드 전송완료");
      setOperate(false);
      dispatch(isEmailSuccess());
    } else if (req === undefined) {
      alert("유효한 이메일을 입력하세요");
      setOperate(false);
    }
  };

  const codeSubmitButton = async () => {
    const req = await axios
      .post(`http://localhost:8000/auth/check-auth-code`, {
        code: code,
        email: email,
      })
      .then((res) => res.data)
      .catch((err) => err.data);
    console.log(req);
    if (req === undefined) {
      alert("코드를 다시 확인해주세요.");
    } else {
      dispatch(codeSuccess());
      let result = req.access_token;
      setToken(result);
      console.log(result);
      console.log(token);
      alert("코드가 확인되었습니다.");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!checkCode) {
      return alert("이메일 인증절차를 완료해주세요.");
    }
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
    let header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(body, header);
    dispatch(registerUserAsync(body, header));
    dispatch(isEmailFail());
  };
  return {
    inputs,
    onChange,
    onSubmit,
    emailClick,
    emailSuccess,
    codeSubmitButton,
    checkCode,
    operate,
  };
};

export default useInputValue;
