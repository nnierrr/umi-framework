import {
    SHOW_ALERT,
    REMOVE_ALERT
} from "../reducers/types";


import React from "react";

import {
    Message
} from "semantic-ui-react";


// Set Alert
export const alert = (messages, color) => dispatch => {
    
    dispatch({
        type: SHOW_ALERT,
        payload: { messages, color }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);

    return <Message error header="Oopsie!" list={messages} />;
}