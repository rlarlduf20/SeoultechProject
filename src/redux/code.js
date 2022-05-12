//액션 타입
const CODE_SUCCESS = "CODE_SUCCESS";
const CODE_FAIL = "CODE_FAIL";

//액션 함수
export const codeSuccess = () => {
  return {
    type: CODE_SUCCESS,
  };
};
export const codeFail = () => {
  return {
    type: CODE_FAIL,
  };
};

//리듀서
const initialState = false;
const codeCheckReducer = (state = initialState, action) => {
  switch (action.type) {
    case CODE_SUCCESS:
      return (state = true);
    case CODE_FAIL:
      return (state = false);
    default:
      return state;
  }
};

export default codeCheckReducer;
