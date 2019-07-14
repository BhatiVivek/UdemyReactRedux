import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    person: [
      {name: 'Gunjan', age:'27', profssion: 'I am a Govt Employee'},
      {name: 'Vivek', age:'27', profssion: 'I am an Engineer'},
      {name: 'Rajendra', age:'55', profssion: 'I am a Business man'},
      {name: 'Krishna', age:'50', profssion: 'I am a beautisian'},
    ],
    otherState: "some other value",
    isBlockVisible: false,
    value: null,
  };

  toggleDivHandler = () => {
    this.setState({ isBlockVisible: !this.state.isBlockVisible });
  }

  onChage = (event) => {
    this.setState({
      person: [
        {profssion: event.target.value},
      ]
    });
  }

  deletePersonHandler = (index) => {
    console.log('asdfasdfasdf');
    const person = this.state.person;
    person.splice(index, 1);
    this.setState({ person });
  }

  render () {
    const style = {
      backgroundcolor: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      margin: '16px auto',
      height: '30px',
    };

    let person = null;

    if(this.state.isBlockVisible){
      person = (
        <div>
          {
            this.state.person.map((person, index) => {
              return (
                <Person
                  key={index}
                  name={person.name}
                  age={person.age}
                  change={() => this.onChage()}
                  onClick={() => this.deletePersonHandler(index)}
                >{person.profssion}
              </Person>
              );
            })
          }
        </div>
      );
    }
  
    return (
      <div className="App">
        {person}
        <button
            style={style}
            onClick={this.toggleDivHandler}>
            Click to show and hide Data
          </button>
      </div>
    );
  }
}
export default App;
