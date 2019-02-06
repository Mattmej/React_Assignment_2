import React from 'react';

const validationComponent = (props) => { 


    if (props.stringLength < 5) { 
        return (
            <p>Text too short!</p>
        )
    }

    else { 
        return (
            <p>Text long enough.</p>
        )
    }

}

export default validationComponent;