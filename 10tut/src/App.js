import ColorBox from './colorBox';
import ColorField from './colorField';
import { useState } from 'react';

function App() {
    const [color, setColor] = useState('');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] = useState(true);
    return (
        <div className='App'>
            <ColorBox 
            color={color}
            hexValue={hexValue}
            isDarkText={isDarkText}
            />
            <ColorField 
                setHexValue={setHexValue}
                setColor={setColor}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />    
        </div>
    )
}

export default App