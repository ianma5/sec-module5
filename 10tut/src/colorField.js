import colorNames from 'colornames'

const colorField = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {
  return (
      <div className="textInput">
        <input 
        autoFocus
        id='textInput' 
        type='text' 
        role='searchbox'
        placeholder='Add color name' 
        value={color}
        onChange={(e)=> {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));  
        }}
          ></input>
          <button 
          type='button'
          onClick={() => setIsDarkText(!isDarkText)}
          >Toggle Text Color</button>
      </div>
  );
}

export default colorField;
