import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Hi my name is {props.name}</p>
            <p>My age is {props.age}</p>
            {props.children}
        </div>
    )
};

export default person;