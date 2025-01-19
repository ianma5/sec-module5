import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Ian', 'Kevin', "Bob"];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
    const handleClick = () => {
        console.log('You clicked it!');
    }
    const handleClickTwo = (name) => {
        console.log(`${name} was clicked`);
    }
    const handleClickThree = (e) => {
        console.log(e.target.innerText);
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClickTwo('Ian')}>Click It</button>
        <button onClick={(e) => handleClickThree(e)}>Click It</button>
    </main>
    )
}

export default Content