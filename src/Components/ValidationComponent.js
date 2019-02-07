import React from 'react';

const validationComponent = (props) => { 

/* === Less Elegant Method === */
    // if (props.stringLength < 5) { 
    //     return (
    //         <p>Text too short!</p>
    //     )
    // }

    // else { 
    //     return (
    //         <p>Text long enough.</p>
    //     )
    // }



/* === More Elegant Method === */
    let message = 'Text long enough.';

    if (props.stringLength < 5) { 
        message = 'Text too short!';
    }

    return (
        <p>{message}</p>
    )
}

export default validationComponent;