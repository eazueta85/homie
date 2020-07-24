import Types from "../types";

export const getProperties = () => {
  return { type: Types.GET_PROPERTIES };
};

export const getPropertiesStart = () => {
  return { type: Types.GET_PROPERTIES_START };
};

export const getPropertiesSuccess = (data) => {
  return {
    type: Types.GET_PROPERTIES_SUCCESS,
    data,
  };
};

export const getPropertiesError = (error) => {
  return {
    type: Types.GET_PROPERTIES_ERROR,
    error,
  };
};
