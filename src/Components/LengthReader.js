import React from 'react';

const lengthReader = (props) => { 
    return (
        <div>
            <input type='text' value={props.text} onChange={props.changed} />
            <p>String Length: {props.length}</p>
        </div>
    )
};

export default lengthReader;