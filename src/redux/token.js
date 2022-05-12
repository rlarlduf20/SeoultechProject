export const TOKEN_STORE = "TOKEN_STORE";
export const TOKEN_DELETE = "TOKEN_DELETE";

export const tokenStore = (getToken) => {
  return {
    type: TOKEN_STORE,
    payload: getToken,
  };
};
export const tokenDelete = () => {
  return {
    type: TOKEN_DELETE,
  };
};

const initialState = {};
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_STORE:
      return { ...state, token: action.payload };
    case TOKEN_DELETE:
      return {};
    default:
      return state;
  }
};

export default tokenReducer;
