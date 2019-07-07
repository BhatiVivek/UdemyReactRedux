import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [ personState, setPersonsState ] = useState({
    person: [
      {name: 'Vivek', age:'27', profssion: 'I am an Engineer'},
      {name: 'Gunjan', age:'27', profssion: 'I am an Govt Employee'},
    ],
    // otherState: "some other value",
  });

  const [ otherState, setotherState ] = useState("some other value");

  console.log(personState, otherState);
  const swithNameHandler = () => {
    setPersonsState({
      person: [
        {name: 'Gunjan', age:'27', profssion: 'I am an Govt Employee'},
        {name: 'Vivek', age:'27', profssion: 'I am an Engineer'},
      ],
      // because hooks doesn't update other states, we will have to dynamically
      // otherState: personState.otherState,
    })
  }

  return (
    <div className="App">
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      >{personState.person[0].profssion}</Person>
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
      >{personState.person[1].profssion}</Person>
      <button onClick={swithNameHandler}>Click to change Name</button>
    </div>
  );
}

export default App;
