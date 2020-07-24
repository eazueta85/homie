import Types from "../types";

const initialState = {
  currentPage: 1,
  totalPerPage: 12,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.CURRENT_PAGE_PROPERTY_SUCCESS:
      return {
        ...state,
        currentPage: action.data,
      };
    case Types.CURRENT_PAGE_PROPERTY:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
