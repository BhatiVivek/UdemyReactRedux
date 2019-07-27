import React, { Component } from 'react';
import { findIndex } from 'lodash';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Chart from './Chart/Chart';

class App extends Component{
  state = {
    userInput: '',
  };

  changeListener = (event) => {
    this.setState({
      userInput: event.target.value 
    });
  }

  deleteChatHandler = (index) => {
    const text = this.state.userInput.split('');

    text.splice(index, 1);
    const editedText = text.join('');
    this.setState({ userInput: editedText });
  }

  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Chart
        charactor={ch}
        key={index}
        onClick={() => this.deleteChatHandler(index)}
      />;
    });

    return (
      <div className="App">
        <input type="text" onChange={this.changeListener} value={this.state.userInput}/>
        <p>{ this.state.userInput }</p>
        <ValidationComponent inputLength={this.state.userInput.length} />
        { charList }
      </div>
    );
  }
}
export default App;