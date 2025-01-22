import React from 'react'

const colorBox = ({ color, hexValue, isDarkText }) => {
  return (
    <div style={{ 
        'backgroundColor': color,
        'color': isDarkText ? "#000" : "#FFF" }}
         className='mainSquare'>
    {color.length ? color : "Empty Value"} <br></br>{hexValue ? hexValue : null}
    </div>
  )
}

export default colorBox