import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { find, findIndex } from 'lodash';

class App extends Component{
  state = {
    persons: [
      { id: '1', name: 'Gunjan', age:'27', profssion: 'I am a Govt Employee'},
      { id: '2', name: 'Vivek', age:'27', profssion: 'I am an Engineer'},
      { id: '3', name: 'Rajendra', age:'55', profssion: 'I am a Business man'},
      { id: '4', name: 'Krishna', age:'50', profssion: 'I am a beautisian'},
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = findIndex(this.state.persons, (p) => {
      return p.id === id;
    });

    // way 1
    // not a good way, because we are mutating the state here.
    // const { persons } = this.state;
    // persons[personIndex].name = event.target.value;
    // this.setState({
    //   persons
    // });

    // Way 2
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name =  event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });

    //Way 3 not working as of now
    // this.setState(prevState => ({
    //   persons: {
    //     ...prevState.persons,
    //     [prevState.persons[personIndex].name]: event.target.value,
    //   },
    // }));
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render () {
    const style = {
      backgroundcolor: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px',
      font: 'inherit',
    };

    let person = null;

    if(this.state.showPersons){
      person = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  onClick={() => this.deletePersonHandler(index)}
                />
              );
            })
          }
        </div>
      );
    }
  
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button
            style={style}
            onClick={this.togglePersonHandler}>
           Toggle Persons
          </button>
          {person}
      </div>
    );
  }
}
export default App;
