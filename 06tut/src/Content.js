import React from 'react'
import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState("Ian");
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
        const names = ['Ian', 'Kevin', "Bob"];
        const int = Math.floor(Math.random()*3);
        return setName(names[int]);
      }
    
    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }
    const handleClickTwo = () => {
        console.log(count);
    }
    const handleClickThree = (e) => {
        console.log(e.target.innerText);
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClickTwo}>Click It</button>
    </main>
    )
}

export default Content