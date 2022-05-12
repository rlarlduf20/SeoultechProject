import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { tokenDelete } from "../redux/token";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const isEmptyObj = (obj) => {
    if (obj.constructor === Object && Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  };
  const auth = useSelector((state) => state.token);
  useEffect(() => {
    if (isEmptyObj(auth)) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [auth]);

  const onClickSignout = async () => {
    let body = {
      refresh_token: auth.token.refresh_token,
    };
    try {
      await axios.post("http://localhost:8000/auth/logout", body);
      dispatch(tokenDelete());
    } catch (err) {
      alert("로그아웃 실패");
      console.error(err);
    }
  };
  return { isLogin, onClickSignout };
};

export default useAuth;
