import React, { useEffect, useState } from 'react';
import { Message } from 'semantic-ui-react';

const DisappearingMessage = props => {
    const { children, timeToDisappear = 3000 } = props;
    const [shouldDisappear, setShouldDisappear] = useState(false);

    useEffect(() => {
        setTimeout(() => setShouldDisappear(true), timeToDisappear);
    });

    return (
        <Message
            {...props}
            hidden={shouldDisappear}
        >
            {children}
        </Message>
    )
};

export default DisappearingMessage;