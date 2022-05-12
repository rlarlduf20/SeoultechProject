import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signinUserAsync } from "../../redux/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
const useSigninInput = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { email, password } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const { isLogin } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      email,
      password,
    };
    dispatch(signinUserAsync(body));
  };

  return { inputs, onSubmit, onChange };
};

export default useSigninInput;
