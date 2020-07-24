import Types from "../types";

export const currentPage = (data) => {
  return {
    type: Types.CURRENT_PAGE_PROPERTY,
    data,
  };
};

export const currentPageSuccess = (data) => {
  return {
    type: Types.CURRENT_PAGE_PROPERTY_SUCCESS,
    data,
  };
};

export const currentPageError = (error) => {
  return {
    type: Types.CURRENT_PAGE_PROPERTY_ERROR,
    error,
  };
};
