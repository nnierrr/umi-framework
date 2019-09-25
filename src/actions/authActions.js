import boilnierplate from '../apis/boilnierplate';
import {
    LOGIN_SUCCESS
} from "./types";
import { REGISTER_SUCCESS } from '../reducers/types';

export const login = formValues => async (dispatch) => {
    const response = await boilnierplate.post("./auth", formValues);

    dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
    });
}

export const register = formValues => async (dispatch) => {
    const response = await boilnierplate.post("./user", formValues);

    dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
    });
}