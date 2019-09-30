import _ from 'lodash';
import boilnierplate from '../apis/boilnierplate';
import {
    LOGIN_SUCCESS
} from "./types";
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../reducers/types';

export const login = formValues => async (dispatch) => {
    const response = await boilnierplate.post("./auth", formValues);

    dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
    });
}

export const register = formValues => async (dispatch) => {
    
    try {
        const response = await boilnierplate.post("./user", formValues);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        });
    }
}