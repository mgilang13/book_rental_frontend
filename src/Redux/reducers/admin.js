const initialValue = {
  adminData: [],
  errorMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const adminReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_LOGIN_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data
      };
    case "POST_LOGIN_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        adminData: action.payload
      };
    case "POST_REGISTER_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_REGISTER_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data
      };
    case "POST_REGISTER_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        adminData: action.payload.data
      };
    default:
      return state;
  }
};

export default adminReducers;
