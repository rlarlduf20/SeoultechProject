import axios from "axios";

//액션타입
export const SIGNIN_USER = "SIGNIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const AUTH_USER = "AUTH_USER";

//액션함수
export const signinUser = () => {};

export const registerUser = (data) => {
  axios.post("/api/user", data);
  return {
    type: REGISTER_USER,
  };
};

export const authUser = () => {};

//리듀서
const initialState = {};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {};
    case REGISTER_USER:
      return { ...state };
    case AUTH_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
