import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return ( 
        <div>
            <p>{props.character}</p>
        </div>
    )
    
};

export default charComponent;