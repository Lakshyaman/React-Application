import React from 'react'

import './Person.css'

const person = props  => {
    //return <p> Hi, I'm a Person!</p>

    //Random(Dynamic Content)
    //Using css file for style is dangerous as it is globally accessible
    return (
        <div className="Person">
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            {/* OnChange fires when value changes */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;