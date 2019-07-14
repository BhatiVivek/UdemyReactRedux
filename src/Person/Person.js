import React from 'react';
import './Person.css';
import logo from '../logo.svg'

const person = (props) => {
    return (
        <div className="Person">
          <div className="container-fluid row">
            <p className="col-sm-8">Hi my name is {props.name}</p>
            <img src={logo}  onClick={props.onClick} className="imgCancle col-sm-4" />
          </div>
          <p>My age is {props.age}</p>
          <span>Enter some text here</span>
          <input type="text" value={props.value} onChange={props.change}/>
          <p>{props.children}</p>
        </div>
    )
};

export default person;
