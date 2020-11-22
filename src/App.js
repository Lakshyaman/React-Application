import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Lakshya", age: 24},
      {name: "Harsh", age:25},
      {name: "Rohit", age: 34},
    ],
    otherState: 'Other',
  }

  switchNameHandler = () => {
    //console.log("click")

    //Do not access state directly like below
    //this.state.persons[0].name = "Savitar";

    this.setState({
      persons: [
        {name: "Savitar", age: 24},
        {name: "Harsh", age:25},
        {name: "Rohit", age: 34},
      ],
     })
  }

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
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name}  age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div> 
    );
  }
}

export default App;
