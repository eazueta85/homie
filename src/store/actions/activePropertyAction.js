import Types from "../types";

export const activeProperties = (data) => {
  return { type: Types.ACTIVE_PROPERTY, data };
};

export const activePropertiesSuccess = (data) => {
  return {
    type: Types.ACTIVE_PROPERTY_SUCCESS,
    data,
  };
};

export const activePropertiesError = (error) => {
  return {
    type: Types.ACTIVE_PROPERTY_ERROR,
    error,
  };
};
