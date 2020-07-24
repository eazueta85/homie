import Types from "../types";

const initialState = {
  activeProperty: {},
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ACTIVE_PROPERTY_SUCCESS:
      return {
        ...state,
        activeProperty: action.data,
      };
    case Types.ACTIVE_PROPERTY_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
