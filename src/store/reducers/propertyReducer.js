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
        properties: action.data ,
      };
    case Types.GET_PROPERTIES_ERROR:
      return {
        ...state,
        error: action.error ,
      };
    default:
      return state;
  }
}
