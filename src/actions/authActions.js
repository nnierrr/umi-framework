import boilnierplate from "../apis/boilnierplate";
import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    CLEAR_ERRORS
} from "../reducers/types";

export const login = formValues => async dispatch => {
  try {
    const response = await boilnierplate.post("./auth", formValues);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });

  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.errors
    });


    setTimeout(() => dispatch({ type: CLEAR_ERRORS }), 5000);
  }
};

export const register = formValues => async dispatch => {
  const response = await boilnierplate.post("./user", formValues);
  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data
    });

  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.errors
    });


    setTimeout(() => dispatch({ type: CLEAR_ERRORS }), 5000);
  }
};
