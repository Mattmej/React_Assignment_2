import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return ( 
        <div onClick={props.click} className='charComponent'>
            <p>{props.character}</p>
        </div>
    )
    
};

export default charComponent;