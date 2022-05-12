import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tokenStore } from "../redux/token";
import { codeFail } from "./code";

//액션타입
export const SIGNIN_USER = "SIGNIN_USER";
export const REGISTER_USER = "REGISTER_USER";

//액션함수
// export const signinUser = (data) => {
//   const req = axios
//     .post("http://localhost:8000/auth/login", data)
//     .then((res) => res.data)
//     .catch((err) => err.data);
//   console.log(req);
//   return {
//     type: SIGNIN_USER,
//     payload: req,
//   };
// };
export const signinUserAsync = (data) => {
  return async (dispatch) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/login", data);
      dispatch({ type: SIGNIN_USER, payload: req });
      console.log(req.data);
      dispatch(tokenStore(req.data));
    } catch (err) {
      console.log(err);
      alert("이메일, 비밀번호를 확인해주세요.");
    }
  };
};

// export const registerUser = (data, accessToken) => {
//   const req = axios
//     .post("http://localhost:8000/user", data, accessToken)
//     .then((res) => res.data)
//     .catch((err) => err.data);

//   return {
//     type: REGISTER_USER,
//     payload: req,
//   };
// };
export const registerUserAsync = (data, accessToken) => {
  return async (dispatch) => {
    try {
      const req = await axios.post(
        "http://localhost:8000/user",
        data,
        accessToken
      );
      dispatch({ type: REGISTER_USER, payload: req });
      console.log(req.data);
      dispatch(tokenStore(req.data.token));
      alert("등록 완료");
    } catch (err) {
      alert("이미 존재하는 이메일입니다.");
      dispatch(codeFail());
    }
  };
};

//리듀서
const initialState = {};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, login: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
};

export default userReducer;
