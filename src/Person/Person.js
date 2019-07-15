import React from 'react';
import './Person.css';
import logo from '../logo.svg'

const person = (props) => {
    return (
        <div className="Person">
          {/* <div className="container container-fluid row">
            <p className="col-sm-11">Hi my name is {props.name}</p>
            <i class="far fa-window-close"></i>
            <img src={logo}  onClick={props.onClick} className="imgCancle col-sm-1" />
          </div> */}
          {/* <p>My age is {props.age}</p> */}
          {/* <span>Enter some text here</span> */}
          <p onClick={props.onClick}>I'm {props.name} and I am {props.age}</p>
          <p>{props.children}</p>
          <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    )
};

export default person;
