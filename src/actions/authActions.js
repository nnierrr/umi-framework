import boilnierplate from "../apis/boilnierplate";
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL
} from "../reducers/types";

export const login = formValues => async dispatch => {
  try {
    const response = await boilnierplate.post("./auth", formValues);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });

  } catch (err) {
    if (err.response.data.msg === "Invalid Credentials") {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors
      });
    }
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
  }
};
