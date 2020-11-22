import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    //This is how JSX works inside

    //return React.createElement('div', null, 'h1', 'Hi I\'m a React App');
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'work'));

    //JSX Code
    return(
      <div className='App'> 
        <h1>
          work
        </h1>
        <Person />
        <Person />
        <Person />
      </div> 
    );
  }
}

export default App;
