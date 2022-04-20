//액션타입
const EMAIL_SUCCESS = "EMAIL_SUCCESS";
const EMAIL_FAIL = "EMAIL_FAIL";

//액션함수
export const isEmailSuccess = () => {
  return {
    type: EMAIL_SUCCESS,
  };
};
export const isEmailFail = () => {
  return {
    type: EMAIL_FAIL,
  };
};

//리듀서
const initialState = false;
const emailSuccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SUCCESS:
      return (state = true);
    case EMAIL_FAIL:
      return (state = false);
    default:
      return state;
  }
};
export default emailSuccessReducer;
