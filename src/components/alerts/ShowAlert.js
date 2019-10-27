import React from 'react';
import { Segment } from 'semantic-ui-react'

export const ShowAlert = (msg, color) => {
    return (
        <div>
            <Segment inverted color={color}>
                {msg}
            </Segment>
        </div>
    );
}