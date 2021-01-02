//---------------------------import { Component } in class component && { useState } and other hooks in functional component
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
//---------------------------------------using functional component also
// const app = props => {
  //-------------------------------Array destructuring
  // const [ personsState, setPersonsState ] =  useState({
  //   persons: [
  //     {name: "Lakshya", age: 24},
  //     {name: "Harsh", age:25},
  //     {name: "Rohit", age: 34},
  //   ],
  // });

  // const [otherState, setOtherState] = useState('Other'); //2 method


  //----------------------------------------no states in functional components --important

  state = {
    persons: [
      {name: "Lakshya", age: 24},
      {name: "Harsh", age:25},
      {name: "Rohit", age: 34},
    ],
    otherState: 'Other',
  }

  

  //   //-------------------------------Do not access state directly like below
  //   //---------------------------------this.state.persons[0].name = "Savitar";
  //   //----------------------------------in Class component, this will only change persons but not discard otherstate and other states will be untouched but in 
       //----------------------------------functional components new state will replace old state while using hooks
       //----------------------------------There are 2 ways to handle this 
       //----------------------------------1)you can either handle it manually by adding otherstates everytime
       //----------------------------------2)use useState multiple times --preferred way
  //---------------------------------we can have functions inside functions in js
  switchNameHandler = (newName, a) => {
    console.log("click")
    //-----------------------------Class Component
    this.setState({
      persons: [
        {name: newName, age: 24},
        {name: "Harsh", age:25},
        {name: "Rohit", age: 34},
      ]
     })
    //------------------------------Functional Component
    // setPersonsState({
    //     persons: [
    //       {name: "Savitar", age: 24},
    //       {name: "Harsh", age:25},
    //       {name: "Rohit", age: 34},
    //     ],
    //     // otherState: personsState.otherState, //1 method
    //    })
  }

  //Two way binding
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Lakshya', age: 24},
        {name: event.target.value, age:25},
        {name: "Rohit", age: 33},
      ]
     })
  }



  //-------------------------------------------------No render() in functional component

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    //----------------------------This is how JSX works inside

    //-----------------------------return React.createElement('div', null, 'Hi I\'m a React App');
    //-----------------------------return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'work'));

    //------------------------------JSX Code
    return(
      //inline style
      
      <div className='App'> 
        <h1>
          work
        </h1>
        {/* ----------------------------this state is not allowed in functional component */}
        {/* ----------------------------Class Component */}
        {/* ----------------You can pass arguments to change values
            ----------------There are 2 ways to do it
            ----------------1) using bind - this.function_name.bind(this,all arguments) ,ex- this.switchNameHandler.bind(this, 'Savitar', 'a')
            ----------------2) using arrow function - {() => this.function_name(all arguments)} - have to add function call and it will not return immediately
            ----------------2 method is inefficient */}
        <button style={style} onClick={() => this.switchNameHandler('Savitar')}>Switch Name</button> 
        <Person 
            name={this.state.persons[0].name}  
            age={this.state.persons[0].age}/>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            //You can pass method references between components
            click={this.switchNameHandler.bind(this, 'Savitar')}
            changed={this.nameChangedHandler}>My Hobbies: Racing </Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> 
        {this.state.otherState}
        {/* ----------------------------Functional Component */}
        {/* <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name}  age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> */}
        {/* 1 method
        {personsState.otherState} */}
        {/* 2 method */}
        {/* {otherState} */}
      </div> 
    );
  }
}

export default App;
//------------------------Stateful and Stateless components
//------------------------Stateful - uses states and it does not matter whether it is class based or functional based it must use state
//------------------------It is a good practice to use Stateless component or dumb(because they have no internal logic) component or presentational component(because they present as output) more 
//------------------------Stateful component or Smart Component or Container Component(contain state of app)
