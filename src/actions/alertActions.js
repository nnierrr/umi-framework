import {
    SHOW_ALERT,
    REMOVE_ALERT
} from "../reducers/types";

// Set Alert
export const alert = (msg, color) => dispatch => {
    
    dispatch({
        type: SHOW_ALERT,
        payload: { msg, color }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
}