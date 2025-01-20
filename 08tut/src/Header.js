import React from 'react'

const Header = ({title = "default title"}) => { // updated default props
  /* const headerStyle = {
    backgroundColor: 'royalblue', 
    color: '#fff'
  }; */
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
  
}

export default Header;