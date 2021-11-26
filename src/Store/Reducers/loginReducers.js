const dataInitial = {
  active: false,
  error: "",
};

export default function userReducer(state = dataInitial, action) {
  switch (action.type) {
    case "USER_VALIDATE":
      return {
        ...state,
        active: true,
      };
    case "CLOSE_SESION":
      return {
        ...state,
        active: false,
      };
    case "USER_REGISTER":
      return {
        ...state,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
      case "RESET_ERRORS":
        return {
          ...state,
          error: "",
        };
    default:
      return {
        ...state,
      };
  }
}
