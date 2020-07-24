import Types from "../types";

const initialState = {
  properties: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.GET_PROPERTIES_START:
      return {
        ...state,
        loading: true,
        properties: [],
      };
    case Types.GET_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        properties: action.data,
      };
    case Types.GET_PROPERTIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
